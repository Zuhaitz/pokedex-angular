import { Pokemon, PokemonsPage } from '../models';

export const pokemonListAdapter = (pokemons: PokemonsPage): Pokemon[] => {
  return pokemons.results.map((p) => ({
    id: Number(p.url.split('/').at(-2)),
    name: p.name,
  }));
};

export const pokemonAdapter = (pokemon: any): Pokemon => {
  return {
    id: pokemon.id,
    name: pokemon.name,
    sprites: pokemon.sprites,
    types: pokemon.types.map((e: any) => ({
      id: Number(e.type.url.split('/').at(-2)),
      name: e.type.name,
    })),
  };
};
