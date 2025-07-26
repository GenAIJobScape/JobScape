import type { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
}

function PageLayout({ children }: PageLayoutProps) {
  return (
    <main className="bg-[#F8FAFC] pt-[70px] max-sm:pt-[46px]">
      <div className="mx-auto xl:max-w-[1240px] max-xl:px-10 max-md:max-w-[624px] max-md:px-0 max-sm:px-[30px]">
        {children}
      </div>
    </main>
  );
}

export default PageLayout;
