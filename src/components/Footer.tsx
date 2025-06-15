import { Link } from 'react-router-dom';

function Footer() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-t-[rgba(0,0,0,0.1)] h-[120px] flex justify-center items-center">
      <p className="text-[#8B8787] font-medium">
        Copyright ©{' '}
        <Link to="/JobScape/" className="underline" onClick={handleClick}>
          GenAIJobScape.co.kr
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
