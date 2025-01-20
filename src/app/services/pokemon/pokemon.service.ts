import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Pokemon, PokemonsPage } from '../../models';
import { pokemonAdapter } from '../../adapters';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private http = inject(HttpClient);
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  state = signal({
    pokemons: new Map<number, Pokemon>(),
  });

  getFormattedPokemons() {
    return Array.from(this.state().pokemons.values());
  }

  getFormattedPokemonById(id: number) {
    return this.state().pokemons.get(id);
  }

  getPokemons(offset: number = 0, limit: number = 20): void {
    this.http
      .get<PokemonsPage>(this.apiUrl, {
        params: { offset, limit },
      })
      .pipe(map((pokemons) => pokemonAdapter(pokemons)))
      .subscribe((res) => {
        // Empty list before getting new page
        // this.state().pokemons.clear();

        res.forEach((pokemon) =>
          this.state().pokemons.set(pokemon.id, pokemon),
        );

        // To notify everyone to update
        this.state.set({ pokemons: this.state().pokemons });
      });
  }

  getPokemonById(id: number): void {
    this.http.get<Pokemon>(this.apiUrl + id).subscribe((res) => {
      this.state().pokemons.set(id, res);

      // To notify everyone to update
      this.state.set({ pokemons: this.state().pokemons });
    });
  }
}
