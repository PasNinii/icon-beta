import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-icon-m3',
  standalone: true,
  template: `<span [class]="'material-symbols-outlined ' + 'size-' + size()">{{
    icon()
  }}</span>`,

  styleUrl: './icon-m3.component.scss',
})
export class IconM3Component {
  size = input<number>(20);
  icon = input<string | undefined>('search');
}
