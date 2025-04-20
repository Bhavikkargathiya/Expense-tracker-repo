import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseChartComponent } from './expense-chart/expense-chart.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseRoutingModule } from './expense-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { ChartModule } from 'primeng/chart';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../search.pipe';
import { RouterModule } from '@angular/router';
import { ExpenseComponent } from './expense.component';
import { HeaderComponent } from '../header/header.component';
import { FrequentlyAskedComponent } from './frequently-asked/frequently-asked.component';

@NgModule({
  declarations: [
    ExpenseChartComponent,
    ExpenseFormComponent,
    ExpenseListComponent,
    SearchPipe,
    ExpenseComponent,
    FrequentlyAskedComponent,
  ],
  imports: [
    CommonModule,
    ChartModule,
    FormsModule,
    ExpenseRoutingModule,
    RouterModule,
    HeaderComponent,
  ],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
  ],
})
export class ExpenseModule {}
