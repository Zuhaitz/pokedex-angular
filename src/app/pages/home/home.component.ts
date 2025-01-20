import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { PokemonService } from '../../services';
import { PokemonCardComponent } from '../../components/pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-home',
  imports: [PokemonCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly limit = 20;
  page = signal(0);

  pokemonService = inject(PokemonService);
  pokemons = computed(() => this.pokemonService.getFormattedPokemons());

  loadMorePokemons = effect(() => {
    this.pokemonService.getPokemons(this.page() * this.limit, this.limit);
  });

  loadMore = () => this.page.update((value) => value + 1);
}
