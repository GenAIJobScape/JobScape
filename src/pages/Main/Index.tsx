import Navigation from '../../components/Navigation';
import Developer from './components/Developer';
import Why from './components/Why';
import Hypothesis from './components/Hypothesis/Hypothesis';
import JoinUs from './components/JoinUs';

function Main() {
  return (
    <>
      <Navigation />
      <div className="pt-[70px] max-sm:pt-[46px]">
        <Why />
        <Hypothesis />
        <JoinUs />
        <Developer />
      </div>
    </>
  );
}

export default Main;
