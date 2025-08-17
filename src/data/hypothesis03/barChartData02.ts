import type { IBarChartData } from '../../types/IBarChartData';
import type { ChartOptions } from 'chart.js';
import { colorSet } from '../../types/colorSet';

export const barChartData2: IBarChartData = {
  title: 'AI 업무 활용 직군 (IT/개발자)의 업무 대체 위협 체감',
  label: '비율',
  labels: ['AI 업무 활용자 (본인)', 'AI업무 활용 관리직 (구성원)'],
  datasets: [
    {
      label: '대체할 수 있음',
      data: [48.8, 47.9],
      backgroundColor: colorSet.navyBlue,
    },
    {
      label: '5년 이내 대체 예상',
      data: [27.7, 38.0],
      backgroundColor: colorSet.lightGray02,
    },
    {
      label: '10년 이내 대체 예상',
      data: [68.8, 82.3],
      backgroundColor: colorSet.pink,
    },
  ],
};

// 가설1 차트1 전용 옵션
export const barChartOptions2: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 4 / 3,
  plugins: {
    title: {
      display: true,
      text: barChartData2.title,
      font: { size: 18, weight: 'bold' },
      padding: { top: 0, bottom: 10 },
    },
    legend: { display: true },
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
        text: barChartData2.label,
        font: { size: 14, weight: 'normal' },
        color: '#888',
      },
      beginAtZero: true,
      max: 100,
      ticks: {
        stepSize: 20,
        callback: (value: string | number) =>
          Number(value).toLocaleString() + '%',
      },
    },
  },
};
