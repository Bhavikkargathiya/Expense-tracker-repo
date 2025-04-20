import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private apiUrl = 'http://localhost:3000/expenses';
  private authUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getExpense(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteExpense(id: number): Observable<any> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  addExpense(expense: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, expense);
  }

  updateExpense(id: number, expense: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, expense);
  }

  // register user

  registerUser(users: any): Observable<any> {
    return this.http.post<any>(this.authUrl, users);
  }

  // login user

  loginUser(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(
      `${this.authUrl}?email=${email}&password=${password}`
    );
  }

  getExpensesByCategory(category: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?category=${category}`);
  }
}
