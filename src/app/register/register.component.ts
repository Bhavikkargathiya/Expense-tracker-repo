import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenseService } from '../service/expense.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';
  showPassword: boolean = false;
  value: string | undefined;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private expenseService: ExpenseService
  ) {
    this.registerForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/^[A-Za-z\s]+$/),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(12),
          Validators.maxLength(17),
        ],
      ],
      gender: ['', Validators.required],
    });
  }

  registerUser() {
    if (this.registerForm.valid) {
      const { name, email, password, gender } = this.registerForm.value;
      const newUser = { name, email, password, gender, id: Date.now() };

      this.expenseService.registerUser(newUser).subscribe({
        next: () => {
          console.log('User Registered:', newUser);
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Registration failed:', err);
          this.errorMessage = 'Registration failed! Try again.';
        },
      });
    } else {
      this.errorMessage = 'Please fill in all required fields!';
    }
  }
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
