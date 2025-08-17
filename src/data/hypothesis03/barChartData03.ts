import type { IBarChartData } from '../../types/IBarChartData';
import type { ChartOptions } from 'chart.js';
import { colorSet } from '../../types/colorSet';

export const barChartData3: IBarChartData = {
  title: 'AI 대체 위협 인식과 특정 IT 직무 채용 감소',
  label: '비율',
  labels: [
    '한국인 AI 업무 위협 인식',
    'AI업무 활용자 역할 대체 인식',
    'QA/테스터 채용 공고 감소',
  ],
  values: [35.4, 48.8, 41.0],
  color: [colorSet.lightGray, colorSet.gray, colorSet.navyBlue],
};

// 가설1 차트1 전용 옵션
export const barChartOptions3: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 4 / 3,
  plugins: {
    title: {
      display: true,
      text: barChartData3.title,
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
        text: barChartData3.label,
        font: { size: 14, weight: 'normal' },
        color: '#888',
      },
      beginAtZero: true,
      max: 60,
      ticks: {
        callback: (value: string | number) =>
          Number(value).toLocaleString() + '%',
      },
    },
  },
};
