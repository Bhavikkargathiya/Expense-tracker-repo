import { Component } from '@angular/core';

@Component({
  selector: 'app-expense-chart',
  standalone: false,
  templateUrl: './expense-chart.component.html',
  styleUrl: './expense-chart.component.scss',
})
export class ExpenseChartComponent {
  documentStyle = getComputedStyle(document.documentElement);
  textColor = this.documentStyle.getPropertyValue('--text-color');
  data3 = {
    labels: [
      'Food',
      'Shopping',
      'Health',
      'Travel',
      'Entertainment',
      'Utilities',
      'Rent',
    ],
    datasets: [
      {
        data: [400, 600, 280, 500, 800, 700, 1000],
        backgroundColor: [
          this.documentStyle.getPropertyValue('--p-cyan-500'),
          this.documentStyle.getPropertyValue('--p-orange-500'),
          this.documentStyle.getPropertyValue('--p-gray-500'),
          this.documentStyle.getPropertyValue('--p-green-400'),
          this.documentStyle.getPropertyValue('--p-yellow-700'),
          this.documentStyle.getPropertyValue('--p-gray-900'),
          this.documentStyle.getPropertyValue('--p-pink-800'),
        ],
        hoverBackgroundColor: [
          this.documentStyle.getPropertyValue('--p-cyan-400'),
          this.documentStyle.getPropertyValue('--p-orange-400'),
          this.documentStyle.getPropertyValue('--p-gray-400'),
          this.documentStyle.getPropertyValue('--p-green-300'),
          this.documentStyle.getPropertyValue('--p-yellow-600'),
          this.documentStyle.getPropertyValue('--p-gray-800'),
          this.documentStyle.getPropertyValue('--p-pink-700'),
        ],
      },
    ],
  };

  options3 = {
    cutout: '60%',
    plugins: {
      legend: {
        labels: {
          color: this.textColor,
        },
      },
    },
  };
}
