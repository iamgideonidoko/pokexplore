import { Pokemon } from '@/interfaces/graphql';
import { Volume2Icon } from 'lucide-react';
import { type FC } from 'react';

const PokemonBigCard: FC<Pokemon> = ({ image, number, name, types }) => {
  return (
    <div className="grid grid-cols-[calc(65%-8rem),35%] items-center justify-between gap-32 overflow-hidden rounded-2xl bg-white p-10 shadow-2xl max-[1000px]:grid-cols-1">
      <div>
        <img src={image ?? ''} alt={`${name}'s image`} className="w-full" />
      </div>
      <div className="self-start">
        <div>
          <strong>#{number}</strong>
        </div>
        <div className="mb-4 flex items-end gap-4">
          <h3 className="mt-2 text-4xl font-bold text-gray-900">{name}</h3>
          <Volume2Icon className="mb-3" />
        </div>
        <div>
          {types &&
            types.map((type) => <span className="mr-2 rounded-full bg-[#BFC66C] px-4 py-1 text-sm">{type}</span>)}
        </div>
        <p className="my-6 text-sm text-gray-700">
          A strange seed was planted on its back at birth. The plant sprouts and glows with this pokémon.
        </p>
        <div className="grid grid-cols-2 gap-4 text-xl max-[500px]:grid-cols-1">
          <div className="flex items-center justify-between rounded-lg bg-[#F6F8FC] px-4 py-3">
            <strong>Height</strong>
            <span>0.7m</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-[#F6F8FC] px-4 py-3">
            <strong>Width</strong>
            <span>0.7m</span>
          </div>
        </div>
        <div className="mt-8">
          <h4 className="text-2xl font-semibold">Stats</h4>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-xl max-[500px]:grid-cols-1">
              <div className="flex items-center justify-between rounded-lg bg-[#DF2140] px-4 py-3">
                <strong>HP</strong>
                <span>47</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-[#FF994C] px-4 py-3">
                <strong>ATK</strong>
                <span>47</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xl max-[500px]:grid-cols-1">
              <div className="flex items-center justify-between rounded-lg bg-[#EECD3D] px-4 py-3">
                <strong>DEF</strong>
                <span>47</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-[#85DDFF] px-4 py-3">
                <strong>SpA</strong>
                <span>47</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xl max-[500px]:grid-cols-1">
              <div className="flex items-center justify-between rounded-lg bg-[#96DA83] px-4 py-3">
                <strong>SpD</strong>
                <span>47</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-[#FB94A8] px-4 py-3">
                <strong>SPD</strong>
                <span>47</span>
              </div>
            </div>
          </div>
          <h4 className="mt-6 text-2xl font-semibold">Abilities</h4>
          <div className="mb-6 mt-2 grid grid-cols-2 gap-4 text-xl max-[500px]:grid-cols-1">
            <div className="flex items-center justify-between rounded-lg bg-[#F6F8FC] px-4 py-3">
              <strong>Overgrow</strong>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-[#F6F8FC] px-4 py-3">
              <strong>Chlorophyll</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonBigCard;
