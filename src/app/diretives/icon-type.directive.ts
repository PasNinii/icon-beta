import { Directive, HostBinding, Input, computed, input } from "@angular/core";
import { AppIcon } from "../icons";

@Directive({
  selector: '[appIconType]',
  standalone: true,
})
export class IconTypeDirective {
  public readonly size = input<20 | 24 | 40 | 48>(20);

  public readonly svgIcon = input('search', {
    transform: (icon: string) => `${icon}_${this.size()}px` ?? ''
  });

  @HostBinding('class')
  public readonly iconClass = computed(() => `icon-${this.size()}`);

}
