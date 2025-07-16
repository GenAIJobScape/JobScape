import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import type { Plugin, ChartOptions } from 'chart.js';

// 범례와 차트 사이 간격을 만드는 플러그인
const legendMarginPlugin: Plugin<'bar'> = {
  id: 'legendMargin',
  beforeInit(chart: ChartJS<'bar'>) {
    const originalFit = chart.legend?.fit;
    if (chart.legend && originalFit) {
      chart.legend.fit = function fit() {
        originalFit.bind(chart.legend)();
        // 범례 영역 아래쪽에 마진 추가
        this.height += 37;
      };
    }
  },
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  legendMarginPlugin,
  ChartDataLabels // 플러그인 등록
);

const options: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 4 / 3,
  plugins: {
    datalabels: {
      anchor: 'end',
      align: 'end',
      color: '#888',
      font: {
        weight: 'bold' as const,
        size: 13,
      },
      formatter: function (value: number) {
        return value.toLocaleString();
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      border: {
        display: true,
        color: '#333',
        width: 2,
      },
      ticks: {
        color: '#666',
        font: {
          size: 11,
        },
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        color: '#e5e5e5',
        lineWidth: 1,
      },
      border: {
        display: false,
      },
      ticks: {
        color: '#666',
        font: {
          size: 11,
        },
        callback: function (value: string | number) {
          return Number(value).toLocaleString();
        },
      },
    },
  },
};

interface IChartDataType {
  title: string;
  label: string;
  labels: (string | number)[];
  values: number[];
  color: string[];
}

interface BarChartProps {
  chartData: IChartDataType;
}

const BarChart = ({ chartData }: BarChartProps) => {
  const data = {
    labels: chartData.labels,
    datasets: [
      {
        title: chartData.title,
        label: chartData.label,
        data: chartData.values,
        backgroundColor: chartData.color,
      },
    ],
  };

  return (
    <div className="w-full h-[200px] sm:h-[330px] xl:h-[666px] mt-[30px] sm:mt-[64px] mb-[80px] sm:mb-[140px] xl:mb-[158px] px-[20%] py-[5%] m-auto bg-[#CFD1E766]">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
