import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  untracked,
} from '@angular/core';
import { PokemonService } from '../../services';
import { LoadIconComponent, PokedexComponent } from '../../components';

@Component({
  selector: 'app-home',
  imports: [PokedexComponent, LoadIconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly limit = 24;
  page = 0;

  pokemonService = inject(PokemonService);
  pokemonState = computed(() => this.pokemonService.getState());

  constructor() {
    effect(() => {
      untracked(() => {
        this.pokemonService.clear();
        this.pokemonService.getPokemons(this.page * this.limit, this.limit);
      });
    });
  }

  loadMore = () => {
    this.page += 1;
    this.pokemonService.getPokemons(this.page * this.limit, this.limit);
  };
}
