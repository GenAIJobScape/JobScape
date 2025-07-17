import type { ReactNode } from 'react';

interface IChartLayout {
  children: ReactNode;
  className?: string;
}

function ChartLayout({ children }: IChartLayout) {
  return (
    <div className="w-full aspect-[1240/666] mt-[64px] bg-white p-[62px]">
      {children}
    </div>
  );
}

export default ChartLayout;
