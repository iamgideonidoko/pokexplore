import Navbar from '@/components/Navbar';
import type { FC, ReactNode } from 'react';

const AppLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-7xl border">{children}</div>
    </div>
  );
};

export default AppLayout;
