import HypothesisTitle from '../../components/HypothesisTitle';
import ContentBlock from '../../components/ContentBlock';
import Navigation from '../../components/Navigation';
import PageLayout from '../../components/PageLayout';
// import LineChart from '../../components/LineChart';
import BarChart from '../../components/BarChart';
import { titleData } from '../../data/hypothesis03/titleData';
import {
  HypothesisData,
  HypothesisData2,
  HypothesisData3,
  HypothesisData4,
} from '../../data/hypothesis03/textContentData';
import {
  barChartData,
  barChartOptions,
} from '../../data/hypothesis03/barChartData01';
import {
  barChartData2,
  barChartOptions2,
} from '../../data/hypothesis03/barChartData02';
import {
  barChartData3,
  barChartOptions3,
} from '../../data/hypothesis03/barChartData03';
import JoinUs from '../Main/components/JoinUs';
import Developer from '../Main/components/Developer';

function Hypothesis03() {
  return (
    <>
      <Navigation backBtn={true} />
      <div className="bg-[#F8FAFC]">
        <PageLayout>
          <HypothesisTitle {...titleData} />
          <ContentBlock {...HypothesisData} />
          <BarChart chartData={barChartData} options={barChartOptions} />
          <ContentBlock {...HypothesisData2} />
          <BarChart chartData={barChartData2} options={barChartOptions2} />
          <ContentBlock {...HypothesisData3} />
          <BarChart chartData={barChartData3} options={barChartOptions3} />
          <ContentBlock {...HypothesisData4} />
          <JoinUs isHypothesis={true} />
        </PageLayout>
        <Developer isHypothesis={true} />
      </div>
    </>
  );
}

export default Hypothesis03;
