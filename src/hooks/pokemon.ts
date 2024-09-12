import { useQuery } from '@apollo/client';
import { GET_POKEMON_BY_NAME, GET_ALL_POKEMONS } from '@/services/pokemon';
import type { Pokemon } from '@/interfaces/graphql';

export const useGetAllPokemons = () =>
  useQuery<{ pokemons: Pokemon[] }>(GET_ALL_POKEMONS, {
    variables: {
      first: 200,
    },
  });

export const useGetPokemonByName = (name: string) =>
  useQuery<{ pokemon: Pokemon }>(GET_POKEMON_BY_NAME, {
    variables: {
      name,
    },
  });
