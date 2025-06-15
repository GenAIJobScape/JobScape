import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CommonBtn from './CommonBtn';

function NavBtn({ text, groupHover }: { text: string; groupHover?: boolean }) {
  return (
    <button
      className={`p-[10px] text-black font-semibold hover:text-main text-[20px] ${groupHover ? 'group-hover:text-main' : ''}`}
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
      <span className="font-medium text-[18px]">{number}</span>
      <span className="font-medium text-[18px]">{text}</span>
    </Link>
  );
}

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full bg-white z-50 shadow-[0_2px_2px_0_rgba(0,0,0,0.1)] transition-all duration-300 ${
        scrolled ? 'h-[70px]' : 'h-[110px]'
      }`}
    >
      <div className="max-w-[1395px] h-full mx-auto flex items-center justify-between">
        <h1 className="">
          <Link
            to="/"
            className={`font-bold leading-[58px] transition-all duration-300 ${
              scrolled ? 'text-[28px]' : 'text-[40px]'
            }`}
          >
            GenAIJobScape
          </Link>
        </h1>
        <ul className="flex gap-[78px] h-full">
          <li className="flex items-center">
            <NavBtn text={'개요'} />
          </li>
          <li className="relative group h-full flex items-center">
            <NavBtn text={'핵심 가설'} groupHover={true} />
            <ul
              className={`hidden absolute -left-[70px] group-hover:block py-5 rounded-2xl bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.1)] w-[270px] ${scrolled ? 'top-[70px]' : 'top-[110px]'}`}
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
            <NavBtn text="개발진" />
          </li>
          <li className="flex items-center">
            <CommonBtn text={'기여하기'} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
