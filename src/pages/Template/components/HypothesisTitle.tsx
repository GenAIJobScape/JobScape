import { TitleData } from '../../../data/templateData';

const { number, title, summary } = TitleData;

function HypothesisTitle() {
  return (
    <section className="pt-[200px]">
      <p className="bg-gradient-to-br from-[#3B48D3] to-[#B0DCFF] bg-clip-text text-transparent font-extrabold text-[64px] leading-none mb-[14px]">
        {number}
      </p>
      <h2 className="text-[40px] leading-none text-[#1E293B] font-extrabold mb-[46px]">
        {title}
      </h2>
      <div>
        <h3 className="text-2xl leading-none mb-[34px] font-semibold">
          {summary.title}
        </h3>
        <ul className="pl-5 flex flex-col gap-6">
          {summary.contents.map((content, index) => (
            <li key={index} className="flex items-center gap-[18px]">
              <span className="w-[6px] h-[6px] rounded-[50%] bg-[#64748B]"></span>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HypothesisTitle;
