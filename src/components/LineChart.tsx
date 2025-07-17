import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import type { ChartOptions } from 'chart.js';
import type { ILineChartData } from '../types/ILineChartData';

// Chart.js 컴포넌트 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart({ data, options }: ILineChartData) {
  // 캡처 이미지를 기반으로 한 실제 데이터
  const defaultData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: '#4ECDC4',
        backgroundColor: 'rgba(78, 205, 196, 0.2)',
        tension: 0.1,
        pointBackgroundColor: '#4ECDC4',
        pointBorderColor: '#4ECDC4',
        pointRadius: 4,
      },
    ],
  };

  // 캡처 이미지와 유사한 옵션 설정
  const defaultOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          pointStyle: 'rect',
          color: '#666',
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: '#e0e0e0',
        },
        ticks: {
          color: '#666',
        },
      },
      y: {
        beginAtZero: false,
        min: 40,
        max: 85,
        grid: {
          color: '#e0e0e0',
        },
        ticks: {
          color: '#666',
          stepSize: 5,
        },
      },
    },
  };

  return (
    <div className="w-full aspect-[1240/666] mt-[64px] bg-white p-[62px]">
      <Line data={data || defaultData} options={options || defaultOptions} />
    </div>
  );
}

export default LineChart;
