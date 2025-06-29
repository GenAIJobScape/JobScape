import type { IHypothesisTitle } from '../data/dataType';

function HypothesisTitle({
  number,
  title,
  summaryTitle,
  summaryContents = [],
}: IHypothesisTitle) {
  return (
    <section className="pt-[200px] max-md:pt-[100px] max-sm:pt-[54px]">
      <p className="bg-gradient-to-br from-[#3B48D3] to-[#B0DCFF] bg-clip-text text-transparent font-extrabold text-[64px] leading-normal mb-[14px] max-md:text-[48px] max-sm:text-[30px]">
        {number}
      </p>
      <h2 className="text-[40px] leading-none text-[#1E293B] font-extrabold mb-[46px] max-md:text-[36px] max-md:mb-[36px] max-sm:text-[24px] max-sm:mb-[20px]">
        {title}
      </h2>
      <div>
        <h3 className="text-2xl leading-none mb-[34px] font-semibold max-md:text-xl max-sm:text-lg max-sm:leading-[1.4] max-sm:mb-[18px]">
          {summaryTitle}
        </h3>
        <ul className="pl-5 flex flex-col gap-6 max-sm:pl-[12px]">
          {summaryContents.map((content, index) => (
            <li
              key={index}
              className="flex items-center gap-[18px] max-sm:items-baseline max-sm:gap-[10px]"
            >
              <span className="w-[6px] h-[6px] rounded-full bg-[#64748B] flex-shrink-0"></span>
              <p className="text-[#1E293B] text-lg max-md:text-base max-sm:text-sm max-sm:leading-[1.4]">
                {content}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HypothesisTitle;
