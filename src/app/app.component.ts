import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { icons } from './icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule],
  template: `
    @for(icon of iconsAvailable;track icon) {
      <mat-icon [svgIcon]="icon" />
    }


    <router-outlet />
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly domSanitizer = inject(DomSanitizer);
  private readonly iconRegistry = inject(MatIconRegistry);

  public readonly iconsAvailable: string[] = [];
  public loaded = false;

  constructor() {
    for (const icon of icons) {
      const iconPath = icon.split('_').join('/');
      const iconName = icon?.split('.')[0] ?? '';

      console.log(iconName)
      this.iconsAvailable.push(iconName);

      this.iconRegistry.addSvgIcon(
        iconName,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${iconPath}`),
      );
    }

    this.loaded = true;
  }
}
