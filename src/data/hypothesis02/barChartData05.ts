import type { IBarChartData } from '../../types/IBarChartData';
import type { ChartOptions } from 'chart.js';
import { colorSet } from '../../types/colorSet';

export const barChartDataGrouped02: IBarChartData = {
  title: '2023년 산업 대분류별 경력자/신입자 구인인원 현황',
  labels: ['IT/SW 서비스 부문', '기타', '기타 서비스 부문', '제조부문'],
  datasets: [
    {
      label: '경력자',
      data: [14126, 10255, 14674, 470378],
      backgroundColor: colorSet.navyBlue,
    },
    {
      label: '신입자',
      data: [8034, 6912, 9644, 44892],
      backgroundColor: colorSet.skyBlue,
    },
  ],
};

export const barChartOptionsGrouped02: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: barChartDataGrouped02.title,
      font: { size: 18, weight: 'bold' },
      padding: { top: 20, bottom: 20 },
    },
    legend: {
      display: true,
      position: 'top',
    },
    datalabels: {
      display: false,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: '산업 대분류',
      },
    },
    y: {
      title: {
        display: true,
        text: '구인 인원 (명)',
      },
      max: 50000,
      beginAtZero: true,
      ticks: {
        callback: (value: string | number) => Number(value).toLocaleString(),
      },
    },
  },
};
