import github from '../assets/github.svg';
import mail from '../assets/mail.svg';

interface BtnInterface {
  href?: string;
  target?: string;
  rel?: string;
  text: string;
}

function CommonBtn({ href, target, rel, text }: BtnInterface) {
  return (
    <a
      href={href ? href : ''}
      target={target ? target : ''}
      rel={rel ? rel : ''}
      className="px-[14px] border border-main rounded-[36px] h-12 flex items-center gap-[6px]"
    >
      <span className="text-[20px] font-semibold text-main">{text}</span>
      <span className="w-6 h-6">
        <img
          src={
            text === '기여하기' ? github : text === '가설 제안하기' ? mail : ''
          }
          alt={text}
        ></img>
      </span>
    </a>
  );
}

export default CommonBtn;
