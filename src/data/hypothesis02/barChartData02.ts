import type { IBarChartData } from '../../types/IBarChartData';
import type { ChartOptions } from 'chart.js';
import { colorSet } from '../../types/colorSet';

export const barChartData02: IBarChartData = {
  title: 'IT 개발 직무 채용 공고 중 경력직 비중 변화',
  label: '경력직 공고 비율(%)',
  labels: ['2024년 1분기', '2025년 1분기'],
  values: [51.0, 56.0],
  color: [colorSet.skyBlue, colorSet.navyBlue],
};

export const barChartOptions02: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 4 / 3,
  plugins: {
    title: {
      display: true,
      text: barChartData02.title,
      font: { size: 18, weight: 'bold' },
      padding: { top: 20, bottom: 20 },
    },
    legend: {
      display: false,
    },
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
      grid: {
        display: false,
      },
    },
    y: {
      title: {
        display: true,
        text: barChartData02.label,
        font: { size: 14 },
        color: '#888',
      },
      max: 70,
      beginAtZero: true,
      ticks: {
        callback: (value: string | number) => Number(value).toLocaleString(),
      },
    },
  },
};
