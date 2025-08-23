import Navigation from '../../components/Navigation';
import PageLayout from '../../components/PageLayout';
import HypothesisTitle from '../../components/HypothesisTitle';
import ContentBlock from '../../components/ContentBlock';
import BarChart from '../../components/BarChart.tsx';
import JoinUs from '../Main/components/JoinUs';
import Developer from '../Main/components/Developer';

import { titleData } from '../../data/hypothesis02/titleData';
import {
  HypothesisData,
  HypothesisData2,
  HypothesisData3,
  HypothesisData4,
  HypothesisData5,
  HypothesisData6,
  HypothesisData7,
} from '../../data/hypothesis02/textContentData';
import {
  barChartData,
  barChartOptions,
} from '../../data/hypothesis02/barChartData01';
import {
  barChartData02,
  barChartOptions02,
} from '../../data/hypothesis02/barChartData02';
import {
  barChartData03,
  barChartOptions03,
} from '../../data/hypothesis02/barChartData03';

function Hypothesis02() {
  return (
    <>
      <Navigation backBtn={true} />
      <div className="bg-[#F8FAFC]">
        <PageLayout>
          <HypothesisTitle {...titleData} />
          <ContentBlock {...HypothesisData} />

          <BarChart chartData={barChartData} options={barChartOptions} />
          <ContentBlock {...HypothesisData2} />

          <BarChart chartData={barChartData02} options={barChartOptions02} />
          <ContentBlock {...HypothesisData3} />

          <BarChart chartData={barChartData03} options={barChartOptions03} />
          <ContentBlock {...HypothesisData4} />

          <ContentBlock {...HypothesisData5} />

          <ContentBlock {...HypothesisData6} />

          <ContentBlock {...HypothesisData7} />
        </PageLayout>
      </div>
    </>
  );
}

export default Hypothesis02;
