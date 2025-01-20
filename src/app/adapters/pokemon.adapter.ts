import { PokemonsPage } from '../models';

export const pokemonAdapter = (pokemons: PokemonsPage) => {
  return pokemons.results.map((p) => ({
    ...p,
    id: Number(p.url.split('/').at(-2)),
  }));
};
