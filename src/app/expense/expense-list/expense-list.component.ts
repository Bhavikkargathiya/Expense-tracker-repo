import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseService } from '../../service/expense.service';
@Component({
  selector: 'app-expense-list',
  standalone: false,
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.scss',
})
export class ExpenseListComponent implements OnInit {
  expenses: any[] = [];
  isloading: boolean = false;
  loadinguser: boolean = false;
  selectedCategory: string = '';
  searchUser: string = '';
  isDropdownOpen = false;

  constructor(private ExpenseService: ExpenseService, private router: Router) {}

  ngOnInit(): void {
    this.loadExpenses();
  }

  loadExpenses() {
    this.isloading = true;
    this.ExpenseService.getExpense().subscribe({
      next: (data) => {
        // console.log('API Response:', data);
        setTimeout(() => {
          this.expenses = data;
          console.log('Expenses:', this.expenses);
          this.isloading = false;
          this.loadinguser = true;
        }, 1000);
      },
      error: (err) => {
        console.error('Error fetching users:', err);
        this.isloading = false;
      },
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  deleteExpense(expenseId: number) {
    console.log('Deleting expense with ID:', expenseId);
    if (confirm('Are you sure?')) {
      this.ExpenseService.deleteExpense(expenseId).subscribe({
        next: () => {
          this.expenses = this.expenses.filter((exp) => exp.id !== expenseId);
        },
        error: (err) => {
          console.error('Error deleting expense:', err);
        },
      });
    }
  }

  filterExpenses() {
    if (!this.selectedCategory) {
      this.loadExpenses();
    } else {
      this.ExpenseService.getExpensesByCategory(
        this.selectedCategory
      ).subscribe({
        next: (data) => {
          console.log('Filtered Data list:', data);
          this.expenses = data;
        },
        error: (err) => {
          console.error('Error fetching filtered expenses:', err);
        },
      });
    }
  }
}
