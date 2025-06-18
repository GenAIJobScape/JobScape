//분석 상태 컴포넌트 가져오기
import { Link } from 'react-router-dom';
import StatusBadge from './StatusBadge.tsx';

//카드에 입력할 내용 받아오는 부분 선언
export interface CardProps {
  number: string;
  title: string;
  desc: string;
  status: '분석 중' | '분석 완료';
}
//카드 함수 정의한 부분.
export default function Card({ number, title, desc, status }: CardProps) {
  return (
    <Link
      to="/"
      className="
        // --모바일--
        w-[325px]
        h-[40px] 
        rounded-[40px]
        pl-[20px] pr-[14px] py-[12px]
        flex justify-between

        // --태블릿--
        md:w-[280px]
        md:h-[290px] 
        md:pt-[28px] md:px-[28px] md:pb-[52px]
        md:flex-col md:justify-start md:gap-[70px]

        // --데스크톱--
        xl:w-[402px] 
        xl:h-[412px]
        xl:px-[36px] xl:py-[33px]
        xl:flex-col xl:gap-[64px]

        shadow-[2px_4px_4px_0px_rgba(0,0,0,0.1)]
        bg-gradient-to-br from-[#3B48D3] to-[#B0DCFF]
        
        // --마우스 호버 이벤트 --
        hover:from-[#B0DCFF] hover:to-[#3B48D3]
        hover:shadow-[4px_6px_6px_0px_rgba(0,0,0,0.3)]
        hover:scale-105

        transition
        duration-200 md:duration-300 xl:duration-500
        
        
      "
    >
      <div
        className="
        flex
        md:flex-col
        lg:flex-col"
      >
        {/* ---indexing숫자--- */}
        <p
          className="
          mr-[6px] md:mr-0
          text-white
          text-[16px] md:text-[28px] xl:text-[48px]
          font-['Pretendard Variable'] 
          font-bold 
          mix-blend-overlay 

    
        "
        >
          {number}
        </p>
        {/* ---카드 타이틀--- */}
        <h3
          className="
        text-white
        text-[14px] md:text-[20px] xl:text-[30px]
        md:mb-[22px] xl:mb-[28px]
        font-['Pretendard Variable'] 
        font-bold
        "
        >
          {title}
        </h3>
        {/* ---내용 요약--- */}
        <p
          className="
          hidden md:inline-block xl:inline-block
          w-full
          text-white 
          text-[14px] xl:text-[18px]
          font-['Pretendard Variable'] 
          font-medium 
          leading-[140%]
          whitespace-normal
          [overflow-wrap:normal]
          [word-break:keep-all] "
        >
          {desc}
        </p>
      </div>
      {/* ---분석 상태--- */}
      <StatusBadge status={status} />
    </Link>
  );
}
