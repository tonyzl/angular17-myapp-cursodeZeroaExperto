import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HeavyLoadersFastComponent } from '@shared/heavy-loaders/heavy-loaders-fast.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule,HeavyLoadersFastComponent, TitleComponent],
  templateUrl: './defer-options.component.html',
  template: `
    <section [ngClass]="['w-full']">
      <ng-content />
    </section>
  `,

})
export default class DeferOptionsComponent {
  
}
