import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import type { ChartOptions } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface IPieChartData {
  title: string | string[];
  labels: string[];
  values: number[];
  colors: string[];
}

interface PieChartProps {
  chartData: IPieChartData;
  options?: ChartOptions<'pie'>;
  width?: number;
  height?: number;
}

function PieChart({ chartData, options }: PieChartProps) {
  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: chartData.labels.join(', '),
        data: chartData.values,
        backgroundColor: chartData.colors,
        borderWidth: 0,
      },
    ],
  };

  const defaultOptions: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: chartData.title,
        font: { size: 18, weight: 'bold' },
        padding: { top: 20, bottom: 10 },
      },
      legend: {
        display: true,
        position: 'top',
        labels: {
          usePointStyle: true,
          pointStyle: 'rect',
          color: '#666',
          padding: 20,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || '';
            const value = context.parsed;
            const total = context.dataset.data.reduce(
              (a: number, b: number) => a + b,
              0
            );
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: ${percentage}%`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full aspect-[1240/666] mt-[64px] bg-white p-[62px]">
      <Pie
        data={data}
        options={(options || defaultOptions) as ChartOptions<'pie'>}
      />
    </div>
  );
}

export default PieChart;
