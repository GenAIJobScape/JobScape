import { Link } from 'react-router-dom';
import CommonBtn from './CommonBtn';
import arrowLeft from '../assets/arrow-left.svg';
import logo from '../assets/logo.svg';

function NavBtn({
  text,
  groupHover,
  onClick,
}: {
  text: string;
  groupHover?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`p-[10px] text-[#64748B] font-medium hover:text-main hover:font-bold text-[18px] ${groupHover ? 'group-hover:text-main' : ''}  max-xl:text-base`}
    >
      {text}
    </button>
  );
}

function SubNavBtn({
  number,
  text,
  to,
}: {
  number: string;
  text: string;
  to?: string;
}) {
  return (
    <Link
      to={to ? to : ''}
      className="w-full h-full flex gap-5 hover:bg-[#F1F3FF] px-7 items-center"
    >
      <span className="font-medium text-[18px] text-[#A2A3B5] max-md:text-[16px]">
        {number}
      </span>
      <span className="font-medium text-[18px] max-md:text-[16px]">{text}</span>
    </Link>
  );
}

function Navigation({ backBtn }: { backBtn?: boolean }) {
  // 개요 버튼 클릭 핸들러 (실시간 화면 크기 체크)
  const handleOverviewClick = () => {
    const isMobile = window.innerWidth < 1396;
    const scrollAmount = isMobile ? 30 : 200;

    window.scrollTo({
      top: scrollAmount,
      behavior: 'smooth',
    });
  };

  // 개발진 버튼 클릭 핸들러
  const handleDeveloperClick = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <nav
      className={`fixed w-full bg-white z-50 shadow-[0_2px_2px_0_rgba(0,0,0,0.1)] transition-all duration-300 h-[70px] max-sm:h-[46px]`}
    >
      <div className="max-w-[1396px] h-full mx-auto flex items-center justify-between max-[1436px]:px-7 max-sm:px-5">
        {backBtn && (
          <button className="w-7 h-7 hidden max-sm:block">
            <img
              src={arrowLeft}
              alt="back button"
              className="block w-full h-full"
            />
          </button>
        )}
        <h1 className="">
          {backBtn ? (
            <Link
              to="/"
              className={`font-bold leading-[58px] transition-all duration-300 w-[267px] block text-center max-xl:w-[190px] max-xl:leading-11 max-xl:text-2xl max-sm:w-[147px] max-sm:hidden`}
            >
              <img src={logo} alt="Logo" />
            </Link>
          ) : (
            <Link
              to="/"
              className={`font-bold leading-[58px] transition-all duration-300 w-[267px] block text-center max-xl:w-[190px] max-xl:leading-11 max-xl:text-2xl max-sm:w-[147px]`}
            >
              <img src={logo} alt="Logo" />
            </Link>
          )}
        </h1>
        <ul className="flex gap-[78px] h-full max-xl:gap-6 max-sm:hidden">
          <li className="flex items-center">
            <NavBtn text={'개요'} onClick={handleOverviewClick} />
          </li>
          <li className="relative group h-full flex items-center">
            <NavBtn text={'핵심 가설'} groupHover={true} />
            <ul
              className={`hidden absolute -left-[70px] group-hover:block py-5 rounded-2xl bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.1)] w-[270px] top-[70px]`}
            >
              <li className="h-16">
                <SubNavBtn number="01." text="Test" to="" />
              </li>
              <li className="h-16">
                <SubNavBtn number="02." text="Test" to="" />
              </li>
              <li className="h-16">
                <SubNavBtn number="03." text="Test" to="" />
              </li>
              <li className="h-16">
                <SubNavBtn number="04." text="Test" to="" />
              </li>
            </ul>
          </li>
          <li className="flex items-center">
            <NavBtn text="개발진" onClick={handleDeveloperClick} />
          </li>
        </ul>
        <div className="max-sm:hidden">
          <CommonBtn text={'기여하기'} />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
