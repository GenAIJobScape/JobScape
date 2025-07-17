import HypothesisTitle from '../../components/HypothesisTitle';
import ContentBlock from '../../components/ContentBlock';
import Navigation from '../../components/Navigation';
import PageLayout from '../../components/PageLayout';
import LineChart from '../../components/LineChart';
import BarChart from '../../components/BarChart';
import {
  HypothesisData,
  HypothesisData2,
  HypothesisData3,
  HypothesisData4,
} from '../../data/hypothesis01/textContentData';
import { titleData } from '../../data/hypothesis01/titleData';
import { barChartData01 } from '../../data/hypothesis01/barChartData01';
import {
  lineChartData01,
  lineChartOptions01,
} from '../../data/hypothesis01/lineChartData01';
import {
  lineChartData02,
  lineChartOptions02,
} from '../../data/hypothesis01/lineChartData02';
import {
  lineChartData03,
  lineChartOptions03,
} from '../../data/hypothesis01/lineChartData03';
import JoinUs from '../Main/components/JoinUs';
import Developer from '../Main/components/Developer';

function Hypothesis01() {
  return (
    <>
      <Navigation backBtn={true} />
      {/* 배경 색상을 위한 wrapper */}
      <div className="bg-[#F8FAFC]">
        <PageLayout>
          <HypothesisTitle {...titleData} />
          <LineChart data={lineChartData01} options={lineChartOptions01} />
          <ContentBlock {...HypothesisData} />
          <BarChart chartData={barChartData01} />
          <LineChart data={lineChartData02} options={lineChartOptions02} />
          <ContentBlock {...HypothesisData2} />
          <ContentBlock {...HypothesisData3} />
          <LineChart data={lineChartData03} options={lineChartOptions03} />
          <ContentBlock {...HypothesisData4} />
          <JoinUs isHypothesis={true} />
        </PageLayout>
        <Developer isHypothesis={true} />
      </div>
    </>
  );
}

export default Hypothesis01;
