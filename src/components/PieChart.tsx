import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import type { ChartOptions } from 'chart.js';

// Chart.js 컴포넌트 등록
ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  data?: {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor: string[];
      borderColor?: string[];
      borderWidth?: number;
    }[];
  };
  options?: ChartOptions<'pie'>;
  width?: number;
  height?: number;
}

function PieChart({ data, options }: PieChartProps) {
  // 캡처 이미지를 기반으로 한 실제 데이터
  const defaultData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [60, 15, 25], // 대략적인 비율로 추정
        backgroundColor: [
          '#FF6B9D', // 핑크/레드
          '#4ECDC4', // 블루
          '#FFD93D', // 옐로우
        ],
        borderColor: ['#FF6B9D', '#4ECDC4', '#FFD93D'],
        borderWidth: 0,
      },
    ],
  };

  // 캡처 이미지와 유사한 옵션 설정
  const defaultOptions: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
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
    <div className="w-full aspect-[1240/666] pt-[64px]">
      <Pie data={data || defaultData} options={options || defaultOptions} />
    </div>
  );
}

export default PieChart;
