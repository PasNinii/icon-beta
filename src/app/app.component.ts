import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { AppIcon, icons } from './icons';
import { IconComponent } from './components/icon/icon.component';
import { MatButtonModule } from '@angular/material/button';
import { RemoveWrapperDirective } from './diretives/remove.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIconModule,
    IconComponent,
    RemoveWrapperDirective,
    MatButtonModule,
  ],
  template: `
    <style>
      div {
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        gap: 2em;
        width: 30em;
        margin: auto;
        border: 1px solid #000;
        margin-top: 2em;
      }
    </style>
    <div>
      <button mat-button (click)="loaded = !loaded">
        Load icon
        <app-icon remove-wrapper [icon]="'search'" [size]="20" matButtonIcon />
      </button>
    </div>
    @if(loaded) { @for(icon of iconsAvailable;track icon) {
    <div>
      @for(size of getSize(); track size) {
      <app-icon [icon]="icon" [size]="size" />
      }
    </div>
    } }

    <router-outlet />
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly domSanitizer = inject(DomSanitizer);
  private readonly iconRegistry = inject(MatIconRegistry);

  public readonly iconsAvailable: AppIcon[] = [];
  public loaded = false;

  constructor() {
    for (const icon of icons) {
      let iconPath: any = icon.split('_');
      const iconSize = iconPath.pop();
      iconPath = iconPath.join('_') + '/' + iconSize;

      const iconName = icon.split('.')[0];

      if (icon.includes('20px')) {
        let iconsAvailable = icon?.split('_') ?? '';
        iconsAvailable.pop();
        this.iconsAvailable.push(iconsAvailable.join('_') as AppIcon);
      }

      this.iconRegistry.addSvgIcon(
        iconName,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `assets/icons/${iconPath}`
        )
      );
    }
  }

  public getSize(): (20 | 24 | 40 | 48)[] {
    return [48, 40, 24, 20];
  }
}
