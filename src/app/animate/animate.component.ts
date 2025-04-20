import { Component } from '@angular/core';
import { AnimateOnScroll } from 'primeng/animateonscroll';

@Component({
  selector: 'app-animate',
  standalone: false,
  templateUrl: './animate.component.html',
  styleUrl: './animate.component.scss',
})
export class AnimateComponent {
  documentStyle = getComputedStyle(document.documentElement);
  textColor = this.documentStyle.getPropertyValue('--text-color');
  basicData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Sales',
        data: [540, 325, 702, 620],
        backgroundColor: [
          'rgba(249, 115, 22, 0.2)',
          'rgba(6, 182, 212, 0.2)',
          'rgb(107, 114, 128, 0.2)',
          'rgba(139, 92, 246, 0.2)',
        ],
        borderColor: [
          'rgb(249, 115, 22)',
          'rgb(6, 182, 212)',
          'rgb(107, 114, 128)',
          'rgb(139, 92, 246)',
        ],
        borderWidth: 1,
      },
    ],
  };

  basicOptions = {
    plugins: {
      legend: {
        labels: {
          color: 'rgba(15, 0, 0, 0.2)',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'rgb(139, 92, 246, 0.2)',
        },
        grid: {
          color: 'rgba(23, 16, 40, 0.2)',
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: 'rgba(4, 2, 8, 0.2)',
        },
        grid: {
          color: 'rgba(27, 18, 48, 0.2)',
        },
      },
    },
  };

  data2 = {
    labels: ['Food', 'Travel', 'Shopping', 'Other'],
    datasets: [
      {
        data: [5400, 10325, 20000, 12000],
        backgroundColor: [
          this.documentStyle.getPropertyValue('--p-cyan-500'),
          this.documentStyle.getPropertyValue('--p-orange-500'),
          this.documentStyle.getPropertyValue('--p-gray-500'),
          this.documentStyle.getPropertyValue('--p-orange-200'),
        ],
        hoverBackgroundColor: [
          this.documentStyle.getPropertyValue('--p-cyan-400'),
          this.documentStyle.getPropertyValue('--p-orange-400'),
          this.documentStyle.getPropertyValue('--p-gray-400'),
          this.documentStyle.getPropertyValue('--p-orange-200'),
        ],
      },
    ],
  };

  options2 = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          color: this.textColor,
        },
      },
    },
  };

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
          this.documentStyle.getPropertyValue('--p-gray-400'),
          this.documentStyle.getPropertyValue('--p-gray-700'),
          this.documentStyle.getPropertyValue('--p-gray-250'),
          this.documentStyle.getPropertyValue('--p-gray-800'),
        ],
        hoverBackgroundColor: [
          this.documentStyle.getPropertyValue('--p-cyan-400'),
          this.documentStyle.getPropertyValue('--p-orange-400'),
          this.documentStyle.getPropertyValue('--p-gray-400'),
          this.documentStyle.getPropertyValue('--p-gray-400'),
          this.documentStyle.getPropertyValue('--p-gray-600'),
          this.documentStyle.getPropertyValue('--p-gray-350'),
          this.documentStyle.getPropertyValue('--p-gray-200'),
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
