export interface IPieChartData {
  title: string | string[]; // 차트 상단 제목
  labels: string[]; // 파이 조각별 레이블
  values: number[]; // 각 조각의 값
  colors: string[]; // 각 조각의 색상 배열
}
