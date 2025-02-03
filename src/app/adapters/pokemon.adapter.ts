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
    height: pokemon.height / 10,
    weight: pokemon.weight / 10,
    sprites: pokemon.sprites,
    cries: pokemon.cries,
    types: pokemon.types.map((e: any) => ({
      id: Number(e.type.url.split('/').at(-2)),
      name: e.type.name,
    })),
    stats: pokemon.stats.map((e: any) => ({
      id: Number(e.stat.url.split('/').at(-2)),
      name: e.stat.name,
      base_stat: e.base_stat,
    })),
    ability: {
      id: Number(pokemon.abilities[0].ability.url.split('/').at(-2)),
      name: pokemon.abilities[0].ability.name,
    },
  };
};
