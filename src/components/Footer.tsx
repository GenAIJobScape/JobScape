import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="border-t border-t-[#94A3B81A] h-[80px] flex justify-center items-center bg-[#1E293B] max-sm:h-[46px]">
      <p className="text-[#8B8787] font-medium max-sm:text-[10px]">
        Copyright ©{' '}
        <Link to="/" className="underline">
          GenAIJobScape.co.kr
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
