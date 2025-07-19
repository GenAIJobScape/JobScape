import type { IPieChartData } from '../../types/IPieChartData';
import { colorSet } from '../../types/colorSet';

export const pieChartData: IPieChartData = {
  title: ['전공별 소프트웨어 전문인력 비중', '(SW계열이 압도적 79.5%)'],
  labels: ['SW계열', '공학계열', '자연계열', '기타'],
  values: [79.5, 9.7, 6.8, 4.0],
  colors: [colorSet.pink, colorSet.purple, colorSet.navyBlue, colorSet.green],
};
