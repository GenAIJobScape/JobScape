export interface ILineChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    tension: number;
    backgroundColor: string;
    pointBackgroundColor: string;
    pointBorderColor: string;
    pointRadius: number;
    pointStyle?: string;
    borderWidth: number;
    borderDash?: number[];
    yAxisID?: string;
  }[];
}
