import Navigation from '../../components/Navigation';
import HypothesisTitle from '../../components/HypothesisTitle';
import PageLayout from '../../components/PageLayout';
import { titleData } from '../../data/hypothesis02/titleData';

function Hypothesis02() {
  return (
    <>
      <Navigation backBtn={true} />
      <div className="bg-[#F8FAFC]">
        <PageLayout>
          <HypothesisTitle {...titleData} />
        </PageLayout>
      </div>
    </>
  );
}

export default Hypothesis02;
