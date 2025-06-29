import { Bar } from 'react-chartjs-2';
import { TitleData } from '../data/templateData';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
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
  legendMarginPlugin
);

const options: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 4 / 3,
  plugins: {},
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

const BarChart = () => {
  const chartData: IChartDataType = TitleData.chartData;

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        title: chartData.title,
        label: chartData.label,
        data: chartData.values,
        backgroundColor:
          chartData.color[Math.floor(Math.random() * chartData.color.length)],
      },
    ],
  };

  return (
    <div className="w-full h-[200px] sm:h-[330px] xl:h-[666px] mt-[30px] sm:mt-[64px] mb-[80px] sm:mb-[140px] xl:mb-[158px] px-[20%] py-[5%] m-auto bg-white">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
