import { Component, effect, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

import { PokeballSVG } from '../../../assets/icons/pokeball-svg.component';
import { NavLinkComponent } from '../nav-link/nav-link.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, PokeballSVG, NavLinkComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  router = inject(Router);
  route = signal('/');
  checkbox = document.getElementById('burger') as HTMLInputElement;

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.route.set(event.urlAfterRedirects);
      });

    effect(() => {
      this.checkbox = document.getElementById('burger') as HTMLInputElement;
    });
  }

  setUnchecked() {
    this.checkbox.checked = false;
  }
}
