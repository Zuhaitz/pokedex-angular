import { Component, effect } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PokeballSVG } from '../../../assets/icons/pokeball-svg.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, PokeballSVG],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  checkbox = document.getElementById('burger') as HTMLInputElement;

  constructor() {
    effect(() => {
      this.checkbox = document.getElementById('burger') as HTMLInputElement;
    });
  }

  setUnchecked() {
    this.checkbox.checked = false;
  }
}
