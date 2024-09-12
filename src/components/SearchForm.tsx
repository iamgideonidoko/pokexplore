import { Button, Input } from '@/composables';
import { Pokemon } from '@/interfaces/graphql';
import { SearchIcon } from 'lucide-react';
import { type FormEvent, useState } from 'react';

export function SearchForm({
  pokemons,
  updatePokemons,
}: {
  pokemons: Pokemon[];
  updatePokemons: (pokemons: Pokemon[]) => void;
}) {
  const [term, setTerm] = useState('');
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const trimmedTerm = term.trim();
    // Empty search term should show all pokemons
    if (!trimmedTerm) return updatePokemons(pokemons);
    updatePokemons(
      pokemons.filter((pokemon) => {
        return (
          pokemon.name?.toLowerCase().includes(term.toLowerCase()) ||
          pokemon.types?.join(' ').toLowerCase().includes(term.toLowerCase())
        );
      }),
    );
  };
  return (
    <form onSubmit={handleSearch} className="mt-8 grid grid-cols-[1fr,auto] gap-3">
      <Input
        value={term}
        placeholder="search eg, ditto or pikachu"
        className="rounded-xl !text-lg shadow-lg placeholder:text-lg placeholder:opacity-75"
        onChange={(e) => setTerm(e.target.value)}
      />
      <Button type="submit" className="rounded-xl !bg-[#FF5350] px-5 shadow-lg">
        <SearchIcon className="scale-110" />
      </Button>
    </form>
  );
}
