function Developer() {
  const DummyData = [1, 2, 3, 4, 5, 6, 7].map((key) => (
    <div key={key}>
      <div className="w-[125px] h-[125px] border rounded-[50%]"></div>
      <div className="mt-[16px]">
        <p className="font-semibold text-[20px]/[140%] text-center">이호준</p>
        <div className="w-[24px] h-[24px] ml-auto mr-auto mt-[4px]">
          <a href="#">
            <img
              className="w-[24px] h-[24px]"
              src="#"
              alt="개발자 깃허브 링크"
            />
          </a>
        </div>
      </div>
    </div>
  ));
  return (
    <section className="mt-[100px] box-border pb-[224px]">
      <h2 className="font-bold text-[36px]/[58px] text-center text-[#3B48D3]">
        개발진
      </h2>
      <div className="flex justify-center gap-[86px] mt-[110px]">
        {DummyData}
      </div>
    </section>
  );
}

export default Developer;
