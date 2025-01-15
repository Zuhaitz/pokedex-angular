import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, PokemonsPage } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/';
  private http = inject(HttpClient);

  getPokemons(): Observable<PokemonsPage> {
    return this.http.get<PokemonsPage>(this.apiUrl + 'pokemon/');
  }
}
