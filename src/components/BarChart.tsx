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
import ChartLayout from './ChartLayout';

import type { Plugin, ChartOptions } from 'chart.js';
import type { IBarChartData } from '../../src/types/IBarChartData';

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

interface BarChartProps {
  chartData: IBarChartData;
  options: ChartOptions<'bar'>;
}

const BarChart = ({ chartData, options }: BarChartProps) => {
  const data = {
    labels: chartData.labels,
    datasets: chartData.datasets
      ? chartData.datasets
      : [
          {
            label: chartData.label,
            data: chartData.values,
            backgroundColor: chartData.color,
            maxBarThickness: 100,
          },
        ],
  };
  return (
    <ChartLayout>
      <Bar data={data} options={options} />
    </ChartLayout>
  );
};

export default BarChart;
