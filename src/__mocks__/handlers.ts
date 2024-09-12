import { graphql, HttpResponse } from 'msw';

export const handlers = [
  graphql.query('pokemons', () => {
    return HttpResponse.json({
      data: {
        pokemons: [
          {
            id: '1',
            name: 'Bulbasaur',
            image: 'https://example.com/bulbasaur.png',
            types: ['Grass', 'Poison'],
          },
          {
            id: '2',
            name: 'Charmander',
            image: 'https://example.com/charmander.png',
            types: ['Fire'],
          },
        ],
      },
    });
  }),
];
