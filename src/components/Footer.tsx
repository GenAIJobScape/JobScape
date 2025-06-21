import { Link } from 'react-router-dom';

function Footer() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-t-[rgba(0,0,0,0.1)] h-[120px] flex justify-center items-center max-[1396px]:h-20 max-sm:h-[46px]">
      <p className="text-[#8B8787] font-medium max-sm:text-[10px]">
        Copyright ©{' '}
        <Link to="/" className="underline" onClick={handleClick}>
          GenAIJobScape.co.kr
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
