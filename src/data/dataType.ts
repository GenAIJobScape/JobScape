export interface IHypothesisTitle {
  number?: string;
  title?: string;
  summaryTitle?: string;
  summaryContents?: string[];
}

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
export interface IContentData {
  id: string;
  type: 'text' | 'ol' | 'ul';
  data: Data;
}
// 내용 블럭
export interface IContentBlock extends ITitle {
  contents: IContentData[];
}
// 검증 블럭
export interface IContent extends ITitle {
  contents: IContentBlock[];
}
