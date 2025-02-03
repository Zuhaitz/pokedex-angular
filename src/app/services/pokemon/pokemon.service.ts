import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, untracked } from '@angular/core';
import { catchError, map, retry, throwError } from 'rxjs';

import { Pokemon, PokemonsPage } from '../../models';
import { pokemonAdapter, pokemonListAdapter } from '../../adapters';

type PokemonState = {
  isLoading: boolean;
  pokemons: Map<number, Pokemon>;
  pokemon: Pokemon;
};

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private http = inject(HttpClient);
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  state = signal({
    isLoading: false,
    pokemons: new Map<number, Pokemon>(),
    pokemon: {} as Pokemon,
  } as PokemonState);

  clear() {
    this.state.set({
      isLoading: false,
      pokemons: new Map<number, Pokemon>(),
      pokemon: {} as Pokemon,
    });
  }

  getState() {
    return {
      pokemons: Array.from(this.state().pokemons.values()),
      isLoading: this.state().isLoading,
    };
  }

  getFormattedPokemonById(id: number) {
    return this.state().pokemons.get(id);
  }

  getPokemonData() {
    return this.state().pokemon;
  }

  // API CALLS
  getPokemons(offset: number = 0, limit: number = 20): void {
    this.state.set({ ...this.state(), isLoading: true });

    this.http
      .get<PokemonsPage>(this.apiUrl, {
        params: { offset, limit },
      })
      .pipe(
        retry(2),
        catchError((err) => {
          console.error(err);
          this.state.set({ ...this.state(), isLoading: false });
          return throwError(() => new Error("Couldn't load pokemons"));
        }),
        map((pokemons: PokemonsPage) => pokemonListAdapter(pokemons)),
      )
      .subscribe((res) => {
        // Empty list before getting new page
        // this.state().pokemons.clear();

        res.forEach((pokemon) =>
          this.state().pokemons.set(pokemon.id, pokemon),
        );

        // To notify everyone to update
        this.state.set({
          ...this.state(),
          pokemons: this.state().pokemons,
          isLoading: true,
        });
      });
  }

  getPokemonById(id: number): void {
    this.state.set({ ...this.state(), isLoading: true });

    this.http
      .get<Pokemon>(this.apiUrl + id)
      .pipe(
        retry(2),
        catchError((err) => {
          console.error(err);
          this.state.set({ ...this.state(), isLoading: false });
          return throwError(() => new Error("Couldn't load pokemon data"));
        }),
        map((pokemon: Pokemon) => pokemonAdapter(pokemon)),
      )
      .subscribe((res) => {
        this.state().pokemons.set(id, res);

        // To notify everyone to update
        this.state.set({
          ...this.state(),
          pokemons: this.state().pokemons,
          isLoading: false,
        });
      });
  }

  getPokemonDataById(id: number): void {
    this.state.set({ ...this.state(), isLoading: true });

    this.http
      .get<Pokemon>(this.apiUrl + id)
      .pipe(
        retry(2),
        catchError((err) => {
          console.error(err);
          this.state.set({ ...this.state(), isLoading: false });
          return throwError(() => new Error("Couldn't load pokemon data"));
        }),
        map((pokemon: Pokemon) => pokemonAdapter(pokemon)),
      )
      .subscribe((res) => {
        this.state().pokemon = res;

        // To notify everyone to update
        this.state.set({
          ...this.state(),
          pokemon: this.state().pokemon,
          isLoading: false,
        });
      });
  }
}
