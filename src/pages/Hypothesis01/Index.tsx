import ContentBlock from '../../components/ContentBlock';
import HypothesisTitle from '../../components/HypothesisTitle';
import Navigation from '../../components/Navigation';
import PageLayout from '../../components/PageLayout';
import LineChart from '../../components/LineChart';
import {
  HypothesisData,
  HypothesisData2,
  HypothesisData3,
  HypothesisData4,
} from '../../data/hypothesis01/textContentData';
import { titleData } from '../../data/hypothesis01/titleData';
import BarChart from '../../components/BarChart';
import { barChartData01 } from '../../data/hypothesis01/barChartData01';
import {
  lineChartData01,
  lineChartOptions01,
} from '../../data/hypothesis01/lineChartData01';

function Hypothesis01() {
  return (
    <>
      <Navigation backBtn={true} />
      <PageLayout>
        <HypothesisTitle {...titleData} />
        <LineChart data={lineChartData01} options={lineChartOptions01} />
        <ContentBlock {...HypothesisData} />
        <ContentBlock {...HypothesisData2} />
        <ContentBlock {...HypothesisData3} />
        <ContentBlock {...HypothesisData4} />
        <BarChart chartData={barChartData01} />
      </PageLayout>
    </>
  );
}

export default Hypothesis01;
