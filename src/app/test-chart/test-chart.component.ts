import {
  ChangeDetectorRef,
  Component,
  effect,
  inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { SelectItemGroup } from 'primeng/api';

// import { AppConfigService } from '@/service/appconfigservice';

interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}

@Component({
  selector: 'app-test-chart',
  standalone: false,
  templateUrl: './test-chart.component.html',
  styleUrl: './test-chart.component.scss',
})
export class TestChartComponent implements OnInit {
  checked: boolean = false;
  date: Date | undefined;
  value!: number;
  ingredient!: string;
  selectedCategories: any[] = [];
  events: EventItem[];
  blockedPanel: boolean = false;

  groupedCities: SelectItemGroup[];
  selectedCity: string | undefined;

  categories: any[] = [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' },
  ];

  ngOnInit() {
    this.selectedCategories = [this.categories[1]];
  }

  // nodes!: any[];

  // selectedNodes: any;

  // constructor(private nodeService: NodeService) {
  //   this.nodeService.getFiles().then((files) => (this.nodes = files));
  // }

  // basicData: any;

  // basicOptions: any;

  // platformId = inject(PLATFORM_ID);

  // configService = inject(AppConfigService);

  // constructor(private cd: ChangeDetectorRef) {}

  // themeEffect = effect(() => {
  //   if (this.configService.transitionComplete()) {
  //     if (this.designerService.preset()) {
  //       this.initChart();
  //     }
  //   }
  // });

  // ngOnInit() {
  //   this.initChart();
  // }

  // initChart() {
  //   if (isPlatformBrowser(this.platformId)) {
  //     const documentStyle = getComputedStyle(document.documentElement);
  //     const textColor = documentStyle.getPropertyValue('--p-text-color');
  //     const textColorSecondary = documentStyle.getPropertyValue(
  //       '--p-text-muted-color'
  //     );
  //     const surfaceBorder = documentStyle.getPropertyValue(
  //       '--p-content-border-color'
  //     );

  //     this.basicData = {
  //       labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  //       datasets: [
  //         {
  //           label: 'Sales',
  //           data: [540, 325, 702, 620],
  //           backgroundColor: [
  //             'rgba(249, 115, 22, 0.2)',
  //             'rgba(6, 182, 212, 0.2)',
  //             'rgb(107, 114, 128, 0.2)',
  //             'rgba(139, 92, 246, 0.2)',
  //           ],
  //           borderColor: [
  //             'rgb(249, 115, 22)',
  //             'rgb(6, 182, 212)',
  //             'rgb(107, 114, 128)',
  //             'rgb(139, 92, 246)',
  //           ],
  //           borderWidth: 1,
  //         },
  //       ],
  //     };

  //     this.basicOptions = {
  //       plugins: {
  //         legend: {
  //           labels: {
  //             color: textColor,
  //           },
  //         },
  //       },
  //       scales: {
  //         x: {
  //           ticks: {
  //             color: textColorSecondary,
  //           },
  //           grid: {
  //             color: surfaceBorder,
  //           },
  //         },
  //         y: {
  //           beginAtZero: true,
  //           ticks: {
  //             color: textColorSecondary,
  //           },
  //           grid: {
  //             color: surfaceBorder,
  //           },
  //         },
  //       },
  //     };
  //     this.cd.markForCheck();
  //   }
  // }

  constructor() {
    this.events = [
      {
        status: 'Ordered',
        date: '15/10/2020 10:30',
        icon: 'pi pi-shopping-cart',
        color: '#9C27B0',
        image: 'game-controller.jpg',
      },
      {
        status: 'Processing',
        date: '15/10/2020 14:00',
        icon: 'pi pi-cog',
        color: '#673AB7',
      },
      {
        status: 'Shipped',
        date: '15/10/2020 16:15',
        icon: 'pi pi-shopping-cart',
        color: '#FF9800',
      },
      {
        status: 'Delivered',
        date: '16/10/2020 10:00',
        icon: 'pi pi-check',
        color: '#607D8B',
      },
    ];

    this.groupedCities = [
      {
        label: 'Germany',
        value: 'de',
        items: [
          { label: 'Berlin', value: 'Berlin' },
          { label: 'Frankfurt', value: 'Frankfurt' },
          { label: 'Hamburg', value: 'Hamburg' },
          { label: 'Munich', value: 'Munich' },
        ],
      },
      {
        label: 'USA',
        value: 'us',
        items: [
          { label: 'Chicago', value: 'Chicago' },
          { label: 'Los Angeles', value: 'Los Angeles' },
          { label: 'New York', value: 'New York' },
          { label: 'San Francisco', value: 'San Francisco' },
        ],
      },
      {
        label: 'Japan',
        value: 'jp',
        items: [
          { label: 'Kyoto', value: 'Kyoto' },
          { label: 'Osaka', value: 'Osaka' },
          { label: 'Tokyo', value: 'Tokyo' },
          { label: 'Yokohama', value: 'Yokohama' },
        ],
      },
    ];
  }
}
