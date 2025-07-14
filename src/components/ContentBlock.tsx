import type {
  IContentBlock,
  IContentData,
  IContentProps,
  ListItemProps,
} from '../data/dataType';

function ListItem(props: ListItemProps) {
  const olStyle = `ps-[30px] [counter-increment:my-ol] before:content-[counter(my-ol)'.'] before:w-[18px] before:top-0 before:left-0 before:text-[#64748B] before:font-medium before:text-center`;
  const ulStyle = `ps-[18px] before:content-[''] before:w-[6px] before:h-[6px] before:bg-[#64748B] before:rounded-[50%] before:left-0 before:top-[0.5em]`;
  return (
    <li
      key={props.id}
      className={`relative before:absolute ${props.isOrd ? olStyle : ulStyle}`}
    >
      {props.children}
    </li>
  );
}

/**문단 또는 리스트 컴포넌트 */
function Content(props: IContentData) {
  const { type, data } = props;

  if (type === 'text' && typeof data === 'string') {
    return <p>{data}</p>;
  } else if (typeof data === 'object') {
    // ol과 ul 처리
    return type === 'ol' ? (
      <ol className="flex flex-col xl:gap-[24px] md:gap-[20px] gap-[12px] md:mx-[30px] mx-[20px] [counter-reset:my-ol]">
        {data.map((li) => (
          <ListItem id={li.id} isOrd={true}>
            {li.item}
          </ListItem>
        ))}
      </ol>
    ) : (
      <ul className="flex flex-col xl:gap-[24px] md:gap-[20px] gap-[12px] md:mx-[30px] mx-[20px]">
        {data.map((li) => (
          // <li key={li.id}>{li.item}</li>
          <ListItem id={li.id} isOrd={false}>
            {li.item}
          </ListItem>
        ))}
      </ul>
    );
  }
  return null;
}

/** 블럭 컴포넌트 */
function ContentBlock(props: IContentProps) {
  //
  return (
    <section className="text-[#1E293B] xl:mt-[124px] md:mt-[94px] mt-[74px]">
      {props.title !== undefined ? (
        <h2 className="font-bold leading-[100%] xl:text-[36px] md:text-[32px] text-[22px]">
          {props.title}
        </h2>
      ) : null}
      <div className="flex flex-col md:gap-[54px] gap-[28px] xl:mt-[76px] md:mt-[64px] mt-[50px] ">
        <h3 className="leading-[100%] md:font-bold font-semibold xl:text-[32px] md:text-[28px] text-[20px]">
          {props.data.title}
        </h3>
        <div className="flex flex-col md:gap-[64px] gap-[40px]">
          {props.data.contents.map((block: IContentBlock) => (
            <div key={block.id} className="flex flex-col gap-[14px]">
              <h4 className="text-[#3B48D3] leading-[140%] md:font-semibold font-medium xl:text-[24px] md:text-[20px] text-[18px]">
                {block.title}
              </h4>
              {block.contents.map((item: IContentData) => (
                <div
                  key={item.id}
                  className="leading-[140%] md:font-normal font-light xl:text-[18px] md:text-[16px] text-[14px]"
                >
                  <Content {...item} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContentBlock;
