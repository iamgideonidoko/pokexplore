import Navbar from '@/components/Navbar';
import type { FC, ReactNode } from 'react';
import PokemonBall from '@/assets/svgs/pokemon-ball.svg?react';

const AppLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <PokemonBall fill="#D1D3D7" className="pointer-events-none fixed -left-64 -top-56 scale-50" />
      <PokemonBall fill="#D1D3D7" className="pointer-events-none fixed left-[40%] top-[-22rem] scale-50" />
      <PokemonBall fill="#D1D3D7" className="pointer-events-none fixed right-[-19rem] top-10 scale-50" />
      <div className="relative pb-12">
        <Navbar />
        <div className="mx-auto max-w-7xl px-8">{children}</div>
      </div>
    </>
  );
};

export default AppLayout;
