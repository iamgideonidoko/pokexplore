import { gql } from '@apollo/client';

export const GET_ALL_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      types
      image
    }
  }
`;

export const GET_POKEMON_BY_NAME = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      types
      resistant
      fleeRate
      maxCP
      maxHP
      image
      evolutions {
        image
      }
    }
  }
`;
