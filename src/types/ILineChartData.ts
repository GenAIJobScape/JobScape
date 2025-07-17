import type { ChartOptions } from 'chart.js';

export interface ILineChartData {
  data?: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor?: string;
      backgroundColor?: string;
      tension?: number;
      pointBackgroundColor?: string;
      pointBorderColor?: string;
      pointRadius?: number;
      borderWidth?: number;
      borderDash?: number[];
      yAxisID?: string;
    }[];
  };
  options?: ChartOptions<'line'>;
  width?: number;
  height?: number;
}
