import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseComponent } from './expense.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { authGuard } from '../auth.guard';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpenseChartComponent } from './expense-chart/expense-chart.component';
import { FrequentlyAskedComponent } from './frequently-asked/frequently-asked.component';

const routes: Routes = [
  {
    path: '',
    component: ExpenseComponent,
    children: [
      {
        path: '',
        component: ExpenseListComponent,
        canActivate: [authGuard],
      },
      {
        path: 'expense-form/:id',
        component: ExpenseFormComponent,
      },
      {
        path: 'expense-form',
        component: ExpenseFormComponent,
      },
      {
        path: 'expense-chart',
        component: ExpenseChartComponent,
      },

      {
        path: 'frequently',
        component: FrequentlyAskedComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpenseRoutingModule {}
