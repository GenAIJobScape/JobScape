import type { ChartOptions } from 'chart.js';
import type { ILineChartData } from '../../types/ILineChartData';
import { colorSet } from '../../types/colorSet';

const { red, black, grid, white } = colorSet;

export const lineChartData02: ILineChartData = {
  labels: [
    '2021',
    '2021.25',
    '2021.50',
    '2021.75',
    '2022.00',
    '2022.25',
    '2022.50',
    '2022.75',
    '2023.00',
  ],
  datasets: [
    {
      label: 'KDT 취업률',
      data: [67.0, 66.5, 65.8, 64.8, 63.5, 61.8, 59.2, 56.5, 54.3],
      borderColor: red,
      backgroundColor: red,
      tension: 0.1,
      pointBackgroundColor: red,
      pointBorderColor: red,
      pointRadius: 4,
      borderWidth: 2,
      yAxisID: 'y',
    },
  ],
};

export const lineChartOptions02: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  plugins: {
    title: {
      display: true,
      text: 'KDT 취업률 하락\n(수료 후 6개월 기준)',
      color: black,
      font: {
        size: 16,
        weight: 'bold',
      },
    },
    legend: {
      display: false,
    },
    tooltip: {
      mode: 'index' as const,
      intersect: false,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleColor: white,
      bodyColor: white,
      callbacks: {
        label: function (context) {
          return `${context.parsed.y}%`;
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
      min: 50,
      max: 70,
      grid: {
        color: grid,
        drawOnChartArea: true,
      },
      ticks: {
        color: black,
        stepSize: 2.5,
        callback: function (value) {
          return value + '%';
        },
      },
      title: {
        display: true,
        text: '취업률 (%)',
        color: black,
      },
    },
  },
  elements: {
    point: {
      hoverRadius: 6,
    },
  },
};
