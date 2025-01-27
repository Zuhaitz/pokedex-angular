import { Component, effect, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PokeballSVG } from '../../../assets/icons/pokeball-svg.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, PokeballSVG],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  checked: HTMLInputElement | undefined;

  getChecked(event: Event) {
    this.checked = event.target as HTMLInputElement;
  }

  setChecked() {
    this.checked!.checked = false;
  }
}
