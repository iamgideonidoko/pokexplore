import { render, screen, waitFor } from '@testing-library/react';
import { Home } from '../screens/home';

test('fetches and displays Pokémon data', async () => {
  render(<Home />);

  // Expect loading state initially
  expect(screen.getByTitle('Loading...')).toBeInTheDocument();

  // Wait for the Pokémon data to be displayed
  await waitFor(() => {
    expect(screen.getByPlaceholderText('search eg, ditto or pikachu')).toBeInTheDocument();
    expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
  });
});
