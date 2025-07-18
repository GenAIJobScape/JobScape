import type { IBarChartData } from '../../types/IBarChartData';
import type { ChartOptions } from 'chart.js';
import { colorSet } from '../../types/colorSet';

export const barChartData: IBarChartData = {
  title: 'KDT 예산 급증 (교육 프로그램 급속 확대)',
  label: '예산(억원)',
  labels: ['2021', '2022', '2023', '2024', '2025'],
  values: [2224, 3068, 4142, 4732, 4781],
  color: [
    colorSet.pink,
    colorSet.pink,
    colorSet.pink,
    colorSet.pink,
    colorSet.pink,
  ],
};

// 가설1 차트1 전용 옵션
export const barChartOptions: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 4 / 3,
  plugins: {
    title: {
      display: true,
      text: barChartData.title,
      font: { size: 18, weight: 'bold' },
      padding: { top: 20, bottom: 10 },
    },
    legend: { display: false },
    datalabels: {
      anchor: 'end',
      align: 'end',
      color: '#666',
      font: { weight: 'bold' as const, size: 13 },
      formatter: (value: number) => value.toLocaleString(),
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: '연도',
        font: { size: 14, weight: 'normal' },
        color: '#888',
      },
    },
    y: {
      title: {
        display: true,
        text: barChartData.label,
        font: { size: 14, weight: 'normal' },
        color: '#888',
      },
      beginAtZero: true,
      ticks: {
        callback: (value: string | number) => Number(value).toLocaleString(),
      },
    },
  },
};
