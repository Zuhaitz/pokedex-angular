import { Component, input } from '@angular/core';
import { Pokemon } from '../../models';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';

@Component({
  selector: 'pokedex',
  imports: [PokemonCardComponent],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css',
})
export class PokedexComponent {
  pokemons = input<Pokemon[]>();
}
