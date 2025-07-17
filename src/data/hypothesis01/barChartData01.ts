import type { IBarChartDataType } from '../../types/IBarChartData';
import { colorSet } from '../../types/colorSet';

const { skyBlue } = colorSet;

export const barChartData01: IBarChartDataType = {
  title: 'KDT 예산 급증 (교육 프로그램 급속 확대)',
  label: '예산 (억원)',
  labels: ['2021', '2022', '2023', '2024', '2025'],
  values: [2224, 3068, 4142, 4732, 4781],
  color: [skyBlue, skyBlue, skyBlue, skyBlue, skyBlue],
};
