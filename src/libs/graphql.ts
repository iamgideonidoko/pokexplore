import appConfig from '@/config';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const graphqlClient = new ApolloClient({
  uri: appConfig.env.VITE_BASE_URL,
  cache: new InMemoryCache(),
});
