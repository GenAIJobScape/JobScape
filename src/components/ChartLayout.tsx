import type { ReactNode } from 'react';

interface IChartLayout {
  children: ReactNode;
  className?: string;
}

function ChartLayout({ children }: IChartLayout) {
  return (
    <section className="mt-[64px]">
      <h2 className="sr-only">차트</h2>
      <div className="w-full aspect-[2/1] bg-white p-[40px] max-md:p-5">
        {children}
      </div>
    </section>
  );
}

export default ChartLayout;
