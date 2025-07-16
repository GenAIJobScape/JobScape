import HypothesisTitle from '../../components/HypothesisTitle';
import Navigation from '../../components/Navigation';
import PageLayout from '../../components/PageLayout';
import { titleData } from '../../data/hypothesis01/titleData';

function Hypothesis01() {
  return (
    <>
      <Navigation backBtn={true} />
      <PageLayout>
        <HypothesisTitle {...titleData} />
      </PageLayout>
    </>
  );
}

export default Hypothesis01;
