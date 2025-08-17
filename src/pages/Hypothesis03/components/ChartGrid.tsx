import PieChart from '../../../components/PieChart';
import BarChart from '../../../components/BarChart';
import type { IPieChartData } from '../../../types/IPieChartData';
import type { IBarChartData } from '../../../types/IBarChartData';
import type { ChartOptions } from 'chart.js';

interface ChartGridProps {
  pieData: IPieChartData;
  barData: IBarChartData;
  barOptions: ChartOptions<'bar'>;
}

const ChartGrid = ({ pieData, barData, barOptions }: ChartGridProps) => (
  <div className="w-full h-[800px] grid grid-cols-2">
    <div className="h-[800px] flex items-center justify-center">
      <PieChart chartData={pieData} />
    </div>
    <div className="h-[800px] flex items-center justify-center">
      <BarChart chartData={barData} options={barOptions} />
    </div>
  </div>
);

export default ChartGrid;
