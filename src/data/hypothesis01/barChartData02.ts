import type { IBarChartData } from '../../types/IBarChartData';
import { colorSet } from '../../types/colorSet';
import type { ChartOptions } from 'chart.js';

export const barChartData02: IBarChartData = {
  title: ['전공별 기업규모 분포', '(중소기업 집중도 3.8배)'],
  labels: ['SW계열', '공학계열', '자연계열', '기타'],
  datasets: [
    {
      label: '대기업',
      data: [68.4, 14.3, 10.3, 4.4],
      backgroundColor: colorSet.pink,
    },
    {
      label: '중소기업',
      data: [307.0, 31.7, 21.6, 14.3],
      backgroundColor: colorSet.navyBlue,
    },
  ],
};

export const barChartOptions02: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: true },
    datalabels: {
      anchor: 'end',
      align: 'end',
      color: '#666',
      font: { weight: 'bold', size: 13 },
      formatter: (value: number) => value.toLocaleString(),
    },
    title: {
      display: true,
      text: ['전공별 기업규모 분포', '(중소기업 집중도 3.8배)'],
      font: { size: 18, weight: 'bold' },
      padding: { top: 20, bottom: 10 },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: '전공',
        font: { size: 14, weight: 'normal' },
        color: '#888',
      },
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: '인원(천명)',
        font: { size: 14, weight: 'normal' },
        color: '#888',
      },
      ticks: {
        callback: (value: string | number) => Number(value).toLocaleString(),
      },
    },
  },
};
