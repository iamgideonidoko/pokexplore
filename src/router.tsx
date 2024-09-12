import { createBrowserRouter } from 'react-router-dom';
import { Root } from '@/root';
import { Home } from '@/screens/home';
import { NotFound } from './screens/404';
import { Pokemon } from './screens/pokemon.name';

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
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
