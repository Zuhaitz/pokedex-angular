import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { PokemonService } from '../../services';
import { PokedexComponent } from '../../components';
import { Pokemon } from '../../models';

@Component({
  selector: 'app-home',
  imports: [PokedexComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly limit = 24;
  page = signal(0);

  pokemonService = inject(PokemonService);
  // pokemons = computed(() => this.pokemonService.getFormattedPokemons());
  // isLoading = computed(() => this.pokemonService.getIsLoading());
  pokemonState = computed(() => this.pokemonService.getState());

  loadMorePokemons = effect(() => {
    // if (this.pokemons().length > 0) return;
    this.pokemonService.getPokemons(this.page() * this.limit, this.limit);
  });

  loadMore = () => this.page.update((value) => value + 1);
}
