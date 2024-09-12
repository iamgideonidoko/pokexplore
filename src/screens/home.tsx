import withHelmet from '@/hocs/withHelmet';
import logo from '@/assets/images/logo.png';
import AppLayout from '@/layouts/app';
import { AutoSkeleton } from '@/composables';
import PokemonCard from '@/components/PokemonCard';
import { useGetAllPokemons } from '@/hooks/pokemon';
import { useEffect, useState, useCallback } from 'react';
import type { Pokemon } from '@/interfaces/graphql';
import { SearchForm } from '@/components/SearchForm';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { twMerge } from 'tailwind-merge';

const HomeScreen = () => {
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const { loading, data, error } = useGetAllPokemons();
  console.log({ loading, data, error });
  const [parent] = useAutoAnimate();
  useEffect(() => {
    if (data?.pokemons) {
      setFilteredPokemons(data.pokemons);
    }
  }, [data]);
  // Memoize update function
  const updatePokemons = useCallback((pokemons: Pokemon[]) => setFilteredPokemons(pokemons), []);
  return (
    <AppLayout>
      <div>
        <img src={logo} width={500} alt="Logo" className="mx-auto max-w-full object-cover" />
      </div>
      {loading && (
        <AutoSkeleton
          parentClassName="mt-[1.875rem] grid grid-cols-3 gap-4 max-[1110px]:grid-cols-2 max-[600px]:grid-cols-1"
          unit={3}
        />
      )}
      {!loading && error && (
        <p className="p-3 py-6 text-center text-xs text-red-400">
          Could not fetch pokemons. Kindly reload or try again later.
        </p>
      )}
      {data && (
        <div>
          <SearchForm updatePokemons={updatePokemons} pokemons={data.pokemons ?? []} />
          <div
            ref={parent}
            className={twMerge(
              'mt-8',
              filteredPokemons.length > 0 && 'grid grid-cols-3 gap-4 max-[1110px]:grid-cols-2 max-[600px]:grid-cols-1',
            )}
          >
            {filteredPokemons.length === 0 && <p className="mt-16 text-center">No pokémon found</p>}
            {filteredPokemons.map((pokemon) => {
              return <PokemonCard {...pokemon} />;
            })}
          </div>
        </div>
      )}
    </AppLayout>
  );
};

export const Home = withHelmet(HomeScreen, {
  title: 'Home - PokeXplore',
  description: 'Your ultimate companion to explore, compare, and master every Pokémon!',
});
