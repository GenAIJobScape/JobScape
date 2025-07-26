interface IpersonItem {
  name: string;
  key: string;
}
interface IdevelopesData {
  data: IpersonItem[];
  role: string;
}
interface Idevelopes {
  DA: IdevelopesData;
  FE: IdevelopesData;
  Designer: IdevelopesData;
}

interface IProps {
  isHypothesis?: boolean;
}

const dummyData1: Idevelopes = {
  DA: {
    data: [
      { name: '박선영', key: 'a' },
      { name: '이호준', key: 'b' },
      { name: '최나영', key: 'c' },
    ],
    role: '데이터분석',
  },
  FE: {
    data: [
      { name: '민경현', key: '1' },
      { name: '이한승', key: '2' },
      { name: '편상건', key: '3' },
    ],
    role: '프론트엔드',
  },
  Designer: { data: [{ name: '황혜명', key: '가' }], role: '디자인' },
};

function Member(props: IdevelopesData) {
  return (
    <div className="flex md:gap-[24px] gap-[16px] md:text-[16px]/[100%] text-[10px]/[100%]">
      <h3 className="text-[#728CE8] font-[500] md:text-left text-right md:w-auto w-[50px]">
        {props.role}
      </h3>
      <div className="flex">
        {props.data.map((people: IpersonItem, i: number) => (
          <p
            key={people.key}
            className={`relative text-[#94A3B8] ${i !== 0 ? "before:content-[''] before:block before:w-[4px] before:h-[4px] before:rounded-[50%] before:bg-[#505050] before:absolute before:top-[50%] before:translate-[-50%] md:before:left-[12px] before:left-[6px] md:pl-[28px] pl-[16px]" : ''}`}
          >
            {people.name}
          </p>
        ))}
      </div>
    </div>
  );
}

function Developer({ isHypothesis }: IProps) {
  return (
    <section
      className={`box-border flex flex-col items-center bg-[#1E293B] xl:gap-[40px] md:gap-[26px] gap-[18px] xl:pt-[70px] xl:pb-[76px] md:py-[60px] py-[24px] xl:mt-[297px] md:mt-[258px]  ${isHypothesis ? 'mt-[129px]' : 'mt-[154px]'}`}
    >
      <h2 className="text-center text-[#E1E1E1] font-[500] md:text-[18px]/[100%] text-[12px]/[100%] ">
        개발진
      </h2>
      <div className="flex md:flex-row flex-col items-start xl:gap-[60px] md:gap-[40px] gap-[16px] w-max">
        {Member(dummyData1.DA)}
        {Member(dummyData1.FE)}
        {Member(dummyData1.Designer)}
      </div>
    </section>
  );
}

export default Developer;
