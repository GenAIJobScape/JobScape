import type { IBarChartData } from '../../types/IBarChartData';
import type { ChartOptions } from 'chart.js';
import { colorSet } from '../../types/colorSet';

export const barChartData03: IBarChartData = {
  title: '2025년 1분기 IT 개발/데이터 직무 구인 공고의 경력 유형별 비중',
  label: '공고 비율(%)',
  labels: ['신입직', '경력직', '신입/경력 무관'],
  values: [4.4, 56.0, 15.4],
  color: [colorSet.lightPink, colorSet.navyBlue, colorSet.lightGreen],
};

export const barChartOptions03: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 4 / 3,
  plugins: {
    title: {
      display: true,
      text: barChartData03.title,
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
        text: barChartData03.label,
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
