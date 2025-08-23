import type { IBarChartData } from '../../types/IBarChartData';
import type { ChartOptions } from 'chart.js';
import { colorSet } from '../../types/colorSet';

export const barChartData: IBarChartData = {
  title: '2025년 1분기 IT 업계 채용 공고 증감률 (전년 동기 대비)',
  label: '감소율(%)',
  labels: ['전체 IT 업계', '신입 개발자', '경력직 개발자'],
  values: [13.4, 18.9, 5.3],
  color: [colorSet.lightPink, colorSet.pink, colorSet.brown],
};

export const barChartOptions: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 4 / 3,
  plugins: {
    title: {
      display: true,
      text: barChartData.title,
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
        text: barChartData.label,
        font: { size: 14 },
        color: '#333',
      },
      max: 25,
      beginAtZero: true,
      ticks: {
        callback: (value: string | number) => Number(value).toLocaleString(),
      },
    },
  },
};
