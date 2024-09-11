import withHelmet from '@/hocs/withHelmet';
import { Link } from 'react-router-dom';

const NotFoundScreen = () => {
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
        <h2 className="text-center text-7xl opacity-95">404</h2>
        <p className="mb-3 w-96 text-center opacity-75">
          Oops! The page you&apos;re looking for seems to have taken a detour. Let&apos;s get you back on track!
        </p>
        <div className="flex w-full items-center justify-center">
          <Link
            to="/"
            className="relative z-20 box-border flex w-auto items-center gap-3 rounded-lg bg-[#FFCC05] px-[24px] py-2 text-white"
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
};

export const NotFound = withHelmet(NotFoundScreen, {
  title: 'Page Not Found 🥲',
});
