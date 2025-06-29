import HypothesisTitle from '../../components/HypothesisTitle';
import Navigation from '../../components/Navigation';
import PageLayout from '../../components/PageLayout';
import { TitleData } from '../../data/hypothesisData01';

function Hypothesis01() {
  return (
    <>
      <Navigation backBtn={true} />
      <PageLayout>
        <HypothesisTitle {...TitleData} />
      </PageLayout>
    </>
  );
}

export default Hypothesis01;
