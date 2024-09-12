import PokemonBigCard from '@/components/PokemonBigCard';
import { AutoSkeleton } from '@/composables';
import withHelmet from '@/hocs/withHelmet';
import { useGetPokemonByName } from '@/hooks/pokemon';
import AppLayout from '@/layouts/app';
import { useSearchParams } from 'react-router-dom';
import PokemonBall from '@/assets/svgs/pokemon-ball.svg?react';

const ComparisonScreen = () => {
  const [searchParams] = useSearchParams();
  const first = searchParams.get('first');
  const second = searchParams.get('second');
  // Fetch the pokemons separately
  const { loading: firstLoading, data: firstData, error: firstError } = useGetPokemonByName(first ?? '');
  const { loading: secondLoading, data: secondData, error: secondError } = useGetPokemonByName(second ?? '');
  return (
    <AppLayout>
      <div className="relative grid grid-cols-2 gap-16 max-[900px]:grid-cols-1">
        <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <PokemonBall fill="#6D7078" className="pointer-events-none scale-[0.3]" />
          <span className="absolute top-1/2 inline-block -translate-y-1/2 text-xl font-bold text-white">VS</span>
        </div>
        <div>
          {firstLoading && <AutoSkeleton parentClassName="mt-[1.875rem] " unit={1} />}
          {!firstLoading && firstError && (
            <p className="p-3 py-6 text-center text-xs text-red-400">
              Could not fetch pokemon. Kindly reload or try again later.
            </p>
          )}
          {!firstLoading && !firstData?.pokemon && <p className="mt-16 text-center">Pokémon not found</p>}
          {firstData?.pokemon && <PokemonBigCard {...firstData.pokemon} comparing />}
        </div>
        <div>
          {secondLoading && <AutoSkeleton parentClassName="mt-[1.875rem] " unit={1} />}
          {!secondLoading && secondError && (
            <p className="p-3 py-6 text-center text-xs text-red-400">
              Could not fetch pokemon. Kindly reload or try again later.
            </p>
          )}
          {!secondLoading && !secondData?.pokemon && <p className="mt-16 text-center">Pokémon not found</p>}
          {secondData?.pokemon && <PokemonBigCard {...secondData.pokemon} comparing />}
        </div>
      </div>
    </AppLayout>
  );
};

export const Comparison = withHelmet(ComparisonScreen, {
  title: 'Comparison - PokeXplore',
  description: 'Your ultimate companion to explore, compare, and master every Pokémon!',
});
