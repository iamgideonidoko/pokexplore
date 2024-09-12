import withHelmet from '@/hocs/withHelmet';
import logo from '@/assets/images/logo.png';
import AppLayout from '@/layouts/app';
import { AutoSkeleton, Button, DebouncedInput } from '@/composables';
import { SearchIcon } from 'lucide-react';
import PokemonCard from '@/components/PokemonCard';
import { useGetAllPokemons } from '@/hooks/pokemon';
import { useEffect, useState } from 'react';
import type { Pokemon } from '@/interfaces/graphql';
// import { env } from '@/env';

const HomeScreen = () => {
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const { loading, data, error } = useGetAllPokemons();
  console.log({ loading, data, error });
  useEffect(() => {
    if (data?.pokemons) {
      setFilteredPokemons(data.pokemons);
    }
  }, [data]);
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
          <form className="mt-8 grid grid-cols-[1fr,auto] gap-3">
            <DebouncedInput
              placeholder="search eg, ditto or pikachu"
              className="rounded-xl !text-lg shadow-lg placeholder:text-lg placeholder:opacity-75"
            />
            <Button className="rounded-xl !bg-[#FF5350] px-5 shadow-lg">
              <SearchIcon className="scale-110" />
            </Button>
          </form>
          <div className="mt-8 grid grid-cols-3 gap-4 max-[1110px]:grid-cols-2 max-[600px]:grid-cols-1">
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
