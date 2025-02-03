import { Component, computed, effect, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services';

@Component({
  selector: 'app-pokemon-details',
  imports: [],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css',
})
export class PokemonDetailsComponent {
  route = inject(ActivatedRoute);
  pokemonService = inject(PokemonService);

  id = signal(0);
  pokemon = computed(() => this.pokemonService.getPokemonData());

  constructor() {
    this.id.set(this.route.snapshot.params['id']);
    this.pokemonService.getPokemonDataById(this.id());
  }
}
