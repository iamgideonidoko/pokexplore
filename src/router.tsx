import { createBrowserRouter } from 'react-router-dom';
import { Root } from '@/root';
import { Home } from '@/screens/home';
import { NotFound } from './screens/404';
import { Pokemon } from './screens/pokemon.name';
import { Comparison } from './screens/comparison';

export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/pokemon/:name',
        element: <Pokemon />,
      },
      {
        path: '/comparison',
        element: <Comparison />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
