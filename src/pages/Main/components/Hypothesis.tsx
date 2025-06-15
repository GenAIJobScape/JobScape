import CardGrid from './CardGrid';
import { type CardProps } from './Card';

const cardsData: CardProps[] = [
  {
    number: '01',
    title: '공급-수요 불균형',
    desc: 'IT 인력 공급이 수요를 초과하여 취업 경쟁이 심화되고 있다',
    status: '분석 중',
  },
  {
    number: '02',
    title: '경력-신입 격차',
    desc: '신입 개발자 취업은 어려워졌지만, 경력자 수요는 여전히 높다',
    status: '분석 중',
  },
  {
    number: '03',
    title: 'AI 대체 위협 인식',
    desc: 'AI 기술 발전으로 인한 일자리 대체 우려가 IT 채용 시장을 위축시키고 있다',
    status: '분석 완료',
  },
  {
    number: '04',
    title: 'AI 생산설 패러독스',
    desc: 'AI 도구 활용으로 개발 생산성은 높아졌지만, 오히려 더 높은 수준의 개발자만 채용하는 현상이 발생했다',
    status: '분석 완료',
  },
  {
    number: '05',
    title: '지역 불균형 심화',
    desc: 'IT 일자리가 수도권에 과도하게 집중되면서 지방 거주자들의 취업 장벽이 높아지고 있다',
    status: '분석 완료',
  },
  {
    number: '06',
    title: '스펙 인플레이션',
    desc: '동일한 주니어 포지션에 요구되는 자격 요건이 과거보다 과도하게 높아졌다',
    status: '분석 완료',
  },
  {
    number: '07',
    title: '투자 위축 연쇄 효과',
    desc: '벤처투자 감소와 스타트업 구조조정이 전체 IT 채용 시장을 위축시켰다',
    status: '분석 완료',
  },
  {
    number: '08',
    title: '부트캠프 포화',
    desc: '부트캠프 수료생의 급증으로 시장이 포화되어 수료생 간 경쟁이 치열해졌다',
    status: '분석 완료',
  },
];

export default function Hypothesis() {
  return (
    <section className="flex items-center flex-col justify-center w-full mb-[100px]">
      <div className="flex flex-row w-full gap-[120px] items-center justify-center mb-[110px] ">
        <div className="flex-1 h-[2px] bg-[#ddd]"></div>
        <h2 className="text-[#3b48d3] text-[36px] font-bold leading-[58px] whitespace-nowrap flex-shrink-0">
          핵심 가설
        </h2>
        <div className="flex-1 h-[2px] bg-[#ddd]"></div>
      </div>
      <CardGrid cards={cardsData} />
    </section>
  );
}
