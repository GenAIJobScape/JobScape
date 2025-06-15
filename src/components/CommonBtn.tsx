interface BtnInterface {
  href?: string;
  target?: string;
  rel?: string;
  text: string;
}

function CommonBtn({ href, target, rel, text }: BtnInterface) {
  return (
    <a
      href={href ? href : ""}
      target={target ? target : ""}
      rel={rel ? rel : ""}
      className="px-[14px] border border-[#3b48d3] rounded-[36px] h-12 flex items-center gap-[6px]"
    >
      <span className="text-[20px] font-semibold text-[#3b48d3]">{text}</span>
    </a>
  );
}

export default CommonBtn;
