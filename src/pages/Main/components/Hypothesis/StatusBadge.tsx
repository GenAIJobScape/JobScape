//분석 중 과 분석 완료 컴포넌트
export interface IStatusBadgeProps {
  status: '분석 중' | '분석 완료';
}

export default function StatusBadge({ status }: IStatusBadgeProps) {
  //분석 중이면 핑크를, 아니면 그린을 보냄
  const stateColor = status === '분석 중' ? 'bg-[#FE76AA]' : 'bg-[#CFFF5E]';

  return (
    <div
      className="
      flex 
      items-center 
      gap-[4px] md:gap-[8px]
    "
    >
      <span
        className={`w-[10px] md:w-[16px] h-[10px] md:h-[16px] ${stateColor} rounded-full`}
      />
      <span className="text-white text-[10px] md:text-[16px] font-['Pretendard Variable'] font-normal leading-[100%]">
        {status}
      </span>
    </div>
  );
}
