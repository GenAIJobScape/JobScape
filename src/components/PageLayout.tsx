import type { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
}

function PageLayout({ children }: PageLayoutProps) {
  return (
    <main className="bg-[#F8FAFC] pt-[70px] max-sm:pt-[46px]">
      <div className="mx-auto xl:max-w-[1240px] max-md:max-w-[624px] max-sm:px-[60px]">
        {children}
      </div>
    </main>
  );
}

export default PageLayout;
