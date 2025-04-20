import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ExpenseListComponent } from './expense/expense-list/expense-list.component';
import { ExpenseFormComponent } from './expense/expense-form/expense-form.component';
import { authGuard } from './auth.guard';
import { TestChartComponent } from './test-chart/test-chart.component';
import { AnimateComponent } from './animate/animate.component';
import { ExpenseChartComponent } from './expense/expense-chart/expense-chart.component';
import { HeaderComponent } from './header/header.component';
import { FrequentlyAskedComponent } from './expense/frequently-asked/frequently-asked.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  },

  {
    path: 'chart',
    component: TestChartComponent,
  },
  {
    path: 'animate',
    component: AnimateComponent,
  },

  {
    path: 'header',
    component: HeaderComponent,
  },

  {
    path: 'expense',
    loadChildren: () =>
      import('./expense/expense.module').then((m) => m.ExpenseModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
