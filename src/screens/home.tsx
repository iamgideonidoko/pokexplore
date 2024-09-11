import withHelmet from '@/hocs/withHelmet';
import logo from '@/assets/images/logo.png';
import AppLayout from '@/layouts/app';
import { Button, DebouncedInput } from '@/composables';
import { SearchIcon } from 'lucide-react';
import PokemonCard from '@/components/PokemonCard';
// import { env } from '@/env';

const HomeScreen = () => {
  // console.log('env: ', env);
  return (
    <AppLayout>
      <div>
        <img src={logo} width={500} alt="Logo" className="mx-auto max-w-full object-cover" />
      </div>
      <div className="mt-8 grid grid-cols-[1fr,auto] gap-3">
        <DebouncedInput
          placeholder="search eg, ditto or pikachu"
          className="rounded-xl !text-lg shadow-lg placeholder:text-lg placeholder:opacity-75"
        />
        <Button className="rounded-xl !bg-[#FF5350] px-5 shadow-lg">
          <SearchIcon className="scale-110" />
        </Button>
      </div>
      <div className="mt-8">
        <PokemonCard />
      </div>
    </AppLayout>
  );
};

export const Home = withHelmet(HomeScreen, {
  title: 'Home - PokeXplore',
  description: 'Your ultimate companion to explore, compare, and master every Pokémon!',
});
