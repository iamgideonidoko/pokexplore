import '../src/env';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/global.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { graphqlClient } from './libs/graphql';
import { ApolloProvider } from '@apollo/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={graphqlClient}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </StrictMode>,
);
