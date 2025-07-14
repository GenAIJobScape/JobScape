import Navigation from '../../components/Navigation';
import Developer from '../Main/components/Developer';
import JoinUs from '../Main/components/JoinUs';
import ContentBlock from '../../components/ContentBlock';
import HypothesisTitle from '../../components/HypothesisTitle';
import LineChart from '../../components/LineChart';
import PieChart from '../../components/PieChart';
import BarChart from '../../components/BarChart';
import {
  dummyDataProps,
  dummyData2Props,
  dummyData3Props,
  dummyData4Props,
} from '../../data/templateData';

function Template() {
  return (
    <>
      <Navigation backBtn={true} />
      <main className="bg-[#F8FAFC] pt-[70px] max-sm:pt-[46px]">
        <div className="mx-auto xl:max-w-[1240px] max-md:max-w-[624px] max-sm:px-[60px]">
          {/* 컨텐츠 내용 */}
          <HypothesisTitle />
          <ContentBlock {...dummyDataProps} />
          <ContentBlock {...dummyData2Props} />
          <ContentBlock {...dummyData3Props} />
          <ContentBlock {...dummyData4Props} />
          <>
            <BarChart />
            <LineChart />
            <PieChart />
          </>
        </div>
        <JoinUs />
        <Developer />
      </main>
    </>
  );
}

export default Template;
