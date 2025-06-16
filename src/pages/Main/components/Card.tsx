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
        w-[402px]
        h-[412px]
        rounded-[40px]
        bg-gradient-to-br from-[#3B48D3] to-[#B0DCFF]
        // --마우스 호버 이벤트 추가--
        hover:from-[#B0DCFF] hover:to-[#3B48D3]
        hover:shadow-[4px_6px_6px_0px_rgba(0,0,0,0.3)]
        hover:scale-105
        // --마우스 호버 이벤트--
        transition
        duration-500
        px-[36px] py-[33px]
        flex flex-col gap-[64px]
        shadow-[2px_4px_4px_0px_rgba(0,0,0,0.1)]
        
      "
    >
      <div>
        {/* ---indexing숫자--- */}
        <p className="text-white text-[48px] font-['Pretendard Variable'] font-bold leading normal mix-blend-overlay mb-[16px]">
          {number}
        </p>
        {/* ---카드 타이틀--- */}
        <h3 className="text-white font-['Pretendard Variable'] text-[30px] font-bold leading-[30px] mb-[28px]">
          {title}
        </h3>
        {/* ---내용 요약--- */}
        <p
          className="w-[330px] text-white font-['Pretendard Variable'] text-[18px]  font-medium leading-[140%] whitespace-normal
          [overflow-wrap:normal]
          [word-break:keep-all]  mb-[64px]"
        >
          {desc}
        </p>
        {/* 글 줄바꿈에서 단어가 깨지는 상황 발생중.. 아직 해결 못 함 */}
      </div>
      {/* ---분석 상태--- */}
      <StatusBadge status={status} />
    </Link>
  );
}
