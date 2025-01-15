import {
  Component,
  inject,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { PokemonService } from '../../services';
import { toSignal } from '@angular/core/rxjs-interop';
import { PokemonsPage } from '../../models';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  pokemonService = inject(PokemonService);
  pokemons: Signal<PokemonsPage | undefined> = toSignal(
    this.pokemonService.getPokemons()
  );
}
