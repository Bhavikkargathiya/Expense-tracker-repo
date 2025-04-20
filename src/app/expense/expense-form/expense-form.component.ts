import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseService } from '../../service/expense.service';
@Component({
  selector: 'app-expense-form',
  standalone: false,
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.scss',
})
export class ExpenseFormComponent implements OnInit {
  expense: any = { amount: '', category: '', date: '', description: '' };
  isEdit = false;

  constructor(
    private expenseService: ExpenseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.expenseService.getExpense().subscribe((expenses) => {
        this.expense =
          expenses.find((exp: { id: string }) => exp.id == id) || this.expense;
      });
    }
  }

  saveExpense() {
    if (this.isEdit) {
      this.expenseService
        .updateExpense(this.expense.id, this.expense)
        .subscribe(() => {
          this.router.navigate(['/expense']);
        });
    } else {
      this.expenseService.addExpense(this.expense).subscribe(() => {
        alert('Expense added successfully!');
        this.router.navigate(['/expense']);
      });
    }
  }
}
