export type Data = string | IList[];

export type ListItemProps = {
  id: string;
  children: React.ReactNode;
  isOrd: boolean;
  ord?: number;
};

export interface Iid {
  id: string;
}
export interface ITitle extends Iid {
  title: string;
}
export interface IList extends Iid {
  item: string;
}

// 세부 내용 블럭
export interface IHypothesisContentData {
  id: string;
  type: 'text' | 'ol' | 'ul';
  data: Data;
}
// 내용 블럭
export interface IHypothesisContentBlock extends ITitle {
  contents: IHypothesisContentData[];
}
// 검증 블럭
export interface IContent extends ITitle {
  contents: IHypothesisContentBlock[];
}

export interface IHypothesisContentProps {
  title?: string;
  data: IContent;
}
