import {
  Component,
  computed,
  effect,
  inject,
  signal,
  untracked,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../services';
import { StatBarComponent } from '../../components/stat-bar/stat-bar.component';

@Component({
  selector: 'app-pokemon-details',
  imports: [StatBarComponent],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css',
})
export class PokemonDetailsComponent {
  router = inject(Router);
  route = inject(ActivatedRoute);
  pokemonService = inject(PokemonService);

  id = signal(0);
  pokemon = computed(() => this.pokemonService.getPokemonData());
  prevNext = computed(() => this.pokemonService.getPreviousNext());

  constructor() {
    this.route.params.subscribe((params) => {
      this.id.set(params['id']);
      this.pokemonService.getPokemonDataById(this.id());
      this.pokemonService.getPreviousPokemon(this.id());
      this.pokemonService.getNextPokemon(this.id());
    });
  }

  goToPokemon(id: number) {
    this.router.navigateByUrl('/pokemon/' + id);
  }
}
