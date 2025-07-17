import type { ChartOptions } from 'chart.js';
import type { ILineChartData } from '../../types/ILineChartData';
import { colorSet } from '../../types/colorSet';
import 'chartjs-plugin-annotation';

const { skyBlue, yellow, green, pink, red, black, grid, white } = colorSet;

export const lineChartData03: ILineChartData = {
  labels: [
    '2019.0',
    '2019.5',
    '2020.0',
    '2020.5',
    '2021.0',
    '2021.5',
    '2022.0',
    '2022.5',
    '2023.0',
  ],
  datasets: [
    {
      label: 'KDT 교육 공급 확대 (예산, 2021년=100)',
      data: [0, 0, 0, 0, 100, 110, 135, 165, 185],
      borderColor: pink,
      backgroundColor: pink,
      tension: 0.1,
      pointBackgroundColor: pink,
      pointBorderColor: pink,
      pointRadius: 4,
      borderWidth: 2,
      yAxisID: 'y',
    },
    {
      label: 'KDT 훈련인원 증가 (2021년=100)',
      data: [0, 0, 0, 0, 100, 140, 180, 235, 275],
      borderColor: yellow,
      backgroundColor: yellow,
      tension: 0.1,
      pointBackgroundColor: yellow,
      pointBorderColor: yellow,
      pointRadius: 4,
      borderWidth: 2,
      yAxisID: 'y',
    },
    {
      label: 'SW전문인력 현황 (2019년=100)',
      data: [100, 102, 103, 110, 115, 125, 130, 140, 155],
      borderColor: green,
      backgroundColor: green,
      tension: 0.1,
      pointBackgroundColor: green,
      pointBorderColor: green,
      pointRadius: 4,
      borderWidth: 2,
      yAxisID: 'y',
    },
    {
      label: '전체 채용률',
      data: [98.0, 94.5, 91.0, 93.0, 94.8, 94.6, 94.4, 95.0, 95.3],
      borderColor: skyBlue,
      backgroundColor: skyBlue,
      tension: 0.1,
      pointBackgroundColor: skyBlue,
      pointBorderColor: skyBlue,
      pointRadius: 4,
      pointStyle: 'rect',
      borderWidth: 2,
      yAxisID: 'y1',
    },
  ],
};

export const lineChartOptions03: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  plugins: {
    title: {
      display: true,
      text: '교육 공급 확대 vs 정체된 취업 시장\n(KDT 부트캠프 등 교육 프로그램 급증)',
      color: black,
      font: {
        size: 16,
        weight: 'bold',
      },
    },
    legend: {
      position: 'top' as const,
      labels: {
        usePointStyle: true,
        pointStyle: 'line',
        color: black,
        padding: 15,
        font: {
          size: 11,
        },
      },
    },
    tooltip: {
      mode: 'index' as const,
      intersect: false,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleColor: white,
      bodyColor: white,
    },
    annotation: {
      annotations: {
        line1: {
          type: 'line',
          xMin: 4,
          xMax: 4,
          borderColor: red,
          borderWidth: 2,
          borderDash: [5, 5],
          label: {
            content: 'KDT 프로그램 시작',
            position: 'start',
            display: true,
            yAdjust: -300,
          },
        },
      },
    },
  },
  scales: {
    x: {
      display: true,
      grid: {
        color: grid,
        drawOnChartArea: true,
      },
      ticks: {
        color: black,
      },
      title: {
        display: true,
        text: '연도',
        color: black,
      },
    },
    y: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
      min: 90,
      max: 280,
      grid: {
        color: grid,
        drawOnChartArea: true,
      },
      ticks: {
        color: black,
        stepSize: 25,
      },
      title: {
        display: true,
        text: '교육 공급 확대 지표(지수)',
        color: black,
      },
    },
    y1: {
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
      min: 90,
      max: 98,
      grid: {
        color: grid,
        drawOnChartArea: false,
      },
      ticks: {
        color: black,
        stepSize: 1,
        callback: function (value) {
          return value + '%';
        },
      },
      title: {
        display: true,
        text: '채용률 (%)',
        color: skyBlue,
      },
    },
  },
};
