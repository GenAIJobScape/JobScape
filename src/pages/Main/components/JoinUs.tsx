import CommonBtn from '../../../components/CommonBtn';

type object1 = {
  url: string;
  text: string;
  key: number;
};

function JoinUs() {
  const joinUsUrls: object1[] = [
    {
      url: 'https://github.com/GenAIJobScape/JobScape',
      text: '기여하기',
      key: 0,
    },
    { url: '#', text: '가설 제안하기', key: 1 },
  ];

  // 더미 컴포넌트
  const DummyComponent = () => {
    return (
      <div className="flex justify-center gap-[14px] mt-[52px] w-[309px] mx-auto whitespace-nowrap">
        {joinUsUrls.map((data) => (
          <CommonBtn
            key={data.key}
            href={data.url}
            text={data.text}
          ></CommonBtn>
        ))}
      </div>
    );
  };

  return (
    <section className="p-[60px] bg-[#ECEDF5] box-border">
      <div className="flex flex-col justify-center align-middle gap-[16px] text-center">
        <h2 className="font-semibold text-[32px] text-center">
          프로젝트에 참여하세요
        </h2>
        <p className="font-[400] text-[20px]/[140%] ">
          새로운 가설을 제안하거나, 데이터 분석 및 시각화 과정에 직접
          기여해주세요.
        </p>
      </div>
      <DummyComponent />
    </section>
  );
}

export default JoinUs;
