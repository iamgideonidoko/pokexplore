import type { FC } from 'react';
import { Pokemon } from '@/interfaces/graphql';
import { Button } from '@/composables';

const PokemonCard: FC<Pokemon> = ({ name, number, image, types }) => {
  return (
    <div className="max-w-full rounded-xl bg-white p-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          {types &&
            types.map((type) => <span className="mr-2 rounded-full bg-[#BFC66C] px-4 py-1 text-sm">{type}</span>)}
        </div>
        <div>#{number ?? 'n/a'}</div>
      </div>
      <div className="grid grid-cols-[60%,30%] items-end justify-between gap-2">
        <div>
          <h3 className="mt-2 text-2xl font-bold text-gray-900">{name}</h3>
          <p className="mt-0.5 text-sm text-gray-700">
            A strange seed was planted on its back at birth. The plant sprouts and glows with this pokémon.
          </p>
          <Button href={`/pokemon/${name?.toLowerCase() ?? ''}`} className="mt-4 rounded-lg bg-[#BFC66C] py-2">
            Know More
          </Button>
        </div>
        <div>
          <img src={image ?? ''} className="max-w-full" />
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
