import { Component, effect } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PokeballSVG } from '../../../assets/icons/pokeball-svg.component';
import { NavLinkComponent } from '../nav-link/nav-link.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, PokeballSVG, NavLinkComponent],
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
