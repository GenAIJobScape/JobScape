import ContentBlock from '../../components/ContentBlock';
import HypothesisTitle from '../../components/HypothesisTitle';
import Navigation from '../../components/Navigation';
import PageLayout from '../../components/PageLayout';
import {
  HypothesisData,
  HypothesisData2,
  HypothesisData3,
  HypothesisData4,
} from '../../data/hypothesis01/textContentData';
import { titleData } from '../../data/hypothesis01/titleData';

function Hypothesis01() {
  return (
    <>
      <Navigation backBtn={true} />
      <PageLayout>
        <HypothesisTitle {...titleData} />
        <ContentBlock {...HypothesisData} />
        <ContentBlock {...HypothesisData2} />
        <ContentBlock {...HypothesisData3} />
        <ContentBlock {...HypothesisData4} />
      </PageLayout>
    </>
  );
}

export default Hypothesis01;
