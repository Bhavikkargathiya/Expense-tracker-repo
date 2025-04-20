import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenseService } from '../service/expense.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  form = 'Login';
  errorMessage: string = '';
  isloading: boolean = false;
  showPassword: boolean = false;

  constructor(private router: Router, private expenseService: ExpenseService) {}

  loginForm = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(12),
      Validators.maxLength(17),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  loginUser() {
    this.isloading = true;
    if (this.loginForm.valid) {
      const email: string = this.loginForm.get('email')?.value ?? '';
      const password: string = this.loginForm.get('password')?.value ?? '';

      this.expenseService.loginUser(email, password).subscribe({
        next: (users) => {
          if (users.length > 0) {
            localStorage.setItem('token', 'authenticated');
            console.log('Login successful');
            this.router.navigate(['/expense']).then(() => {
              this.isloading = false;
            });
          } else {
            this.errorMessage = 'Invalid Email or Password!';
            this.isloading = false;
          }
        },
        error: (err) => {
          console.error('Login failed:', err);
          this.errorMessage = 'Something went wrong!';
          this.isloading = false;
        },
      });
    } else {
      this.isloading = false;
    }
  }
  ngOnInit() {
    console.log(this.loginForm);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
