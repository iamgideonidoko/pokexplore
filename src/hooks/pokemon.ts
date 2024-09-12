import { useQuery } from '@apollo/client';
import { GET_ALL_POKEMONS } from '@/services/pokemon';
import type { Pokemon } from '@/interfaces/graphql';

export const useGetAllPokemons = () =>
  useQuery<{ pokemons: Pokemon[] }>(GET_ALL_POKEMONS, {
    variables: {
      first: 200,
    },
  });
