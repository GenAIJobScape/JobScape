import CommonBtn from '../../../components/CommonBtn';

interface Iobject1 {
  url: string;
  text: string;
  key: number;
}

interface IProps {
  isHypothesis?: boolean;
}

const joinUsUrls: Iobject1[] = [
  {
    url: 'https://github.com/GenAIJobScape/JobScape',
    text: '기여하기',
    key: 0,
  },
  { url: '#', text: '가설 제안하기', key: 1 },
];

function InteractionEl() {
  return (
    <div className="flex justify-center whitespace-nowrap xl:gap-[18px] xl:w-[305px] gap-[10px]">
      {joinUsUrls.map((data) => (
        <CommonBtn key={data.key} href={data.url} text={data.text}></CommonBtn>
      ))}
    </div>
  );
}

function JoinUs({ isHypothesis }: IProps) {
  return (
    <section
      className={`box-border w-full flex flex-col items-center xl:gap-[54px] md:gap-[33px] gap-[26px] ${isHypothesis ? 'xl:mt-[158px] md:mt-[140px] mt-[80px]' : 'xl:mt-[120px] md:mt-[100px] mt-[38px] md:px-[148px] px-[90px]'} xl:pt-[60px] md:pt-[36px] pt-[42px] md:pb-[44px] pb-0 break-keep`}
    >
      <div className="flex flex-col justify-center align-middle text-center xl:gap-[24px] md:gap-[14px] gap-[16px]">
        <h2 className="text-center md:font-[600] font-[500] xl:text-[24px] md:text-[22px] text-[14px]/[100%]">
          프로젝트에 참여하세요
        </h2>
        <p className="md:font-[500] font-[400] md:text-[16px]/[140%] text-[12px]/[120%] text-[#4A4A4A]">
          새로운 가설을 제안하거나, 데이터 분석 및 시각화 과정에 직접
          기여해주세요.
        </p>
      </div>
      <InteractionEl />
    </section>
  );
}

export default JoinUs;
