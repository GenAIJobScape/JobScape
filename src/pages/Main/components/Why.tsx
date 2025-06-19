export default function Why() {
  return (
    <section
      className="
    flex
    flex-col
    items-center 
    justify-center 
    w-full
    px-[28px] md:px-[94px] xl:px-0
    mb-[56px] md:mb-[117px]
    "
    >
      <h2
        className="
      text-[#3b48d3] 
      text-[20px] md:text-[32px] xl:text-[48px]
      font-bold 
      leading-[58px] 
      whitespace-nowrap 
      flex-shrink-0 
      mt-[200px] 
      text-center"
      >
        왜 개발했나요?
      </h2>
      <p
        className="
        text-[#222222] 
        text-[12px] md:text-[16px] xl:text-[24px] 
        font-normal 
        max-w-[1135px]
        mt-[18px] md:mt-[30px] xl:mt-[44px] 
        text-center 
        whitespace-normal
        [overflow-wrap:normal]
        [word-break:keep-all]
        "
      >
        생성형 AI의 등장으로 노동 시장에 변화가 예상되는 가운데, 막연한
        추측보다는 구체적인 데이터를 통해 현실을 파악하고자 했습니다. 다양한
        가설을 세우고 데이터로 검증하며, 그 결과를 직관적인 시각화로
        정리했습니다. 이 작업이 AI 시대 일자리 변화에 대한 이해에 조금이라도
        도움이 되길 바랍니다.
      </p>
    </section>
  );
}
