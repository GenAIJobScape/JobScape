import type { IBarChartData } from '../../types/IBarChartData';
import type { ChartOptions } from 'chart.js';
import { colorSet } from '../../types/colorSet';

export const barChartData: IBarChartData = {
  title: 'AI 위협 인식과 구직자 취업 전략 변화의 연관성',
  label: '비율',
  labels: [
    '한국인 AI 업무 위협 인식',
    'AI업무 활용자 역할 대체 가능성 인식',
    '구직자 취업 전략 수정 필요성',
  ],
  values: [35.4, 48.8, 73.0],
  color: [colorSet.navyBlue, colorSet.navyBlue, colorSet.pink],
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
      padding: { top: 0, bottom: 10 },
    },
    legend: { display: false },
    datalabels: {
      anchor: 'end',
      align: 'end',
      offset: 0,
      color: '#666',
      font: { weight: 'bold' as const, size: 13 },
      formatter: (value: number) => value.toFixed(1) + '%',
    },
  },
  scales: {
    x: {
      title: {
        display: false,
        text: '-',
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
        callback: (value: string | number) =>
          Number(value).toLocaleString() + '%',
      },
    },
  },
};
