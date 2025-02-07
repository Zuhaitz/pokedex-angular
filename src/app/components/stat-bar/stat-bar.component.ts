import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'stat-bar',
  imports: [],
  templateUrl: './stat-bar.component.html',
  styleUrl: './stat-bar.component.css',
})
export class StatBarComponent {
  stat = input({ id: 0, name: '', base_stat: 0 });

  percentage = computed(() => {
    const stat = this.stat().base_stat;
    const div = Math.floor(stat / 10) * 10;
    return (div / 150) * 100;
  });
}
