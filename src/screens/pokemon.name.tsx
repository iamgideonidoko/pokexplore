import PokemonBigCard from '@/components/PokemonBigCard';
import { AutoSkeleton } from '@/composables';
import withHelmet from '@/hocs/withHelmet';
import { useGetPokemonByName } from '@/hooks/pokemon';
import AppLayout from '@/layouts/app';
import { ArrowRightIcon } from 'lucide-react';
import { useParams } from 'react-router-dom';

const PokemonScreen = () => {
  const { name } = useParams();
  const { loading, data, error } = useGetPokemonByName(name ?? '');
  return (
    <AppLayout>
      {loading && <AutoSkeleton parentClassName="mt-[1.875rem] " unit={1} />}
      {!loading && error && (
        <p className="p-3 py-6 text-center text-xs text-red-400">
          Could not fetch pokemon. Kindly reload or try again later.
        </p>
      )}
      {!loading && !data?.pokemon && <p className="mt-16 text-center">Pokémon not found</p>}
      {data?.pokemon && (
        <>
          <PokemonBigCard {...data.pokemon} showCompare use2Columns />
          <div className="mt-16 px-20">
            <h2 className="mb-8 text-4xl font-semibold">Evolution</h2>
            <div className="flex flex-wrap items-center gap-16">
              {(!data.pokemon.evolutions || data.pokemon.evolutions?.length === 0) && (
                <p className="mt-16 text-center">No record of evolution</p>
              )}
              {data.pokemon.evolutions?.map((evolution, idx) => {
                return (
                  <>
                    <img src={evolution?.image ?? ''} alt="Evolution image" className="w-72 max-w-full" />
                    {data.pokemon.evolutions?.length !== idx + 1 && <ArrowRightIcon className="mx-8 scale-[2.5]" />}
                  </>
                );
              })}
            </div>
          </div>
        </>
      )}
    </AppLayout>
  );
};

export const Pokemon = withHelmet(PokemonScreen, {
  title: 'Pokemon - PokeXplore',
  description: 'Your ultimate companion to explore, compare, and master every Pokémon!',
});
