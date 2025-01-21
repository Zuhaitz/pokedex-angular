import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'base-layout',
  imports: [RouterOutlet],
  templateUrl: './base-layout.component.html',
  styleUrl: './base-layout.component.css',
})
export class BaseLayoutComponent {}
