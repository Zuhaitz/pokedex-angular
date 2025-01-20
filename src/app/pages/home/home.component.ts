import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
  Signal,
} from '@angular/core';
import { PokemonService } from '../../services';
import { toSignal } from '@angular/core/rxjs-interop';
import { Pokemon } from '../../models';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly limit = 20;
  page = signal(0);

  pokemonService = inject(PokemonService);
  pokemons = computed(() => this.pokemonService.getFormattedPokemons());

  constructor() {
    effect(() => {
      this.pokemonService.getPokemons(this.page() * this.limit, this.limit);
    });

    effect(() => {
      console.log(this.pokemons());
    });
  }
}
