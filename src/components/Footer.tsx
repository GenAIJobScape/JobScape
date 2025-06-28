import { Link } from 'react-router-dom';

function Footer() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-t-[#94A3B81A] h-[80px] flex justify-center items-center bg-[#1E293B] max-[1396px]:h-20 max-sm:h-[46px]">
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
