interface personItem {
  name: string;
  key: number;
}
interface developes {
  DA: personItem[];
  FE: personItem[];
  Designer: personItem[];
}

const dummyData1: developes = {
  DA: [
    { name: '박선영', key: 1 },
    { name: '이호준', key: 2 },
    { name: '최나영', key: 3 },
  ],
  FE: [
    { name: '민경현', key: 4 },
    { name: '이한승', key: 5 },
    { name: '편상건', key: 6 },
  ],
  Designer: [{ name: '황혜명', key: 7 }],
};

function Developer() {
  const dummy = (data: personItem[], role: string) => (
    <div className="flex md:gap-[58px] gap-[24px] md:text-[16px]/[100%] text-[10px]/[100%]">
      <h3 className="text-[#728CE8] md:font-[500] text-right md:w-[74px] w-[50px]">
        {role}
      </h3>
      <div className="flex md:gap-[54px] gap-[30px]">
        {data.map((people: personItem, i: number) => (
          <p
            key={people.key}
            className={`relative ${i !== 0 ? "before:content-[''] before:block before:w-[4px] before:h-[4px] before:rounded-[50%] before:bg-[#D9D9D9] before:absolute before:top-[50%] before:translate-[-50%] md:before:left-[-25px] before:left-[-13px]" : ''}`}
          >
            {people.name}
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <section className="box-border flex flex-col items-center md:gap-[54px] gap-[16px]  xl:pb-[224px] md:pb-[164px] pb-[100px]">
      <h2 className="text-center text-[#222222] md:font-[600] font-[500] md:text-[18px]/[100%] text-[12px]/[100%] ">
        개발진
      </h2>
      <div className="flex flex-col items-start gap-[25px] w-max">
        {dummy(dummyData1.DA, '데이터분석')}
        {dummy(dummyData1.FE, '프론트엔드')}
        {dummy(dummyData1.Designer, '디자인')}
      </div>
    </section>
  );
}

export default Developer;
