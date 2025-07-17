export interface IChartDataType {
  title: string; // 차트 상단 제목(Title)
  label: string; // 데이터셋 라벨(범례에 표시되는 이름)
  labels: (string | number)[]; // x축 레이블(예: 연도, 카테고리 등)
  values: number[]; // y축 값(데이터 값, 막대의 높이 등)
  color: string[]; // 각 데이터(막대 등)의 색상 배열
}
