import { Component, computed, effect, inject, input } from '@angular/core';
import { PokemonService } from '../../services';
import { TYPES } from '../../utils';

@Component({
  selector: 'pokemon-card',
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css',
})
export class PokemonCardComponent {
  id = input(0);

  pokemonService = inject(PokemonService);
  pokemon = computed(() =>
    this.pokemonService.getFormattedPokemonById(this.id()),
  );

  types = TYPES;

  log = () => {
    console.log('ME');
  };

  constructor() {
    effect(() => {
      this.pokemonService.getPokemonById(this.id());
    });
  }
}
