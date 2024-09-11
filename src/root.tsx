import withErrorBoundary from './hocs/withErrorBoundary';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const RootComponent = () => {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  );
};

export const Root = withErrorBoundary(RootComponent);
