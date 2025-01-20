import { Pokemon, PokemonsPage } from '../models';

export const pokemonListAdapter = (pokemons: PokemonsPage) => {
  return pokemons.results.map((p) => ({
    id: Number(p.url.split('/').at(-2)),
    name: p.name,
  }));
};

export const pokemonAdapter = (pokemon: Pokemon) => {
  return { id: pokemon.id, name: pokemon.name, sprites: pokemon.sprites };
};
