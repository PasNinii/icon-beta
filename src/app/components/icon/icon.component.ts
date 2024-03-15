import { NgClass } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AppIcon } from '../../icons';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [MatIconModule, NgClass],
  styleUrl: './icon.component.scss',
  template: ` <mat-icon [class]="iconClass()" [svgIcon]="iconName()" /> `,
})
export class IconComponent {
  public readonly size = input<20 | 24 | 40 | 48>(20);
  public readonly icon = input<AppIcon>('search');

  public readonly iconClass = computed(() => `icon-${this.size()}`);
  public readonly iconName = computed(() => `${this.icon()}_${this.size()}px`);
}
