import {
  Component,
  computed,
  effect,
  inject,
  input,
  untracked,
} from '@angular/core';
import { PokemonService } from '../../services';
import { TYPES } from '../../utils';
import { Router } from '@angular/router';

@Component({
  selector: 'pokemon-card',
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css',
})
export class PokemonCardComponent {
  router = inject(Router);
  id = input(0);
  types = TYPES;

  pokemonService = inject(PokemonService);
  pokemon = computed(() =>
    this.pokemonService.getFormattedPokemonById(this.id()),
  );

  constructor() {
    effect(() => {
      // Untrack so it doesn't execute when updating signals inside method
      untracked(() => this.pokemonService.getPokemonById(this.id()));
    });
  }

  handleClick() {
    this.router.navigateByUrl('/pokemon/' + this.id());
  }
}
