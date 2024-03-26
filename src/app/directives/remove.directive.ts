import {
  AfterViewInit,
  Directive,
  ElementRef,
  Renderer2,
  inject,
} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[remove-wrapper]',
})
export class RemoveWrapperDirective implements AfterViewInit {
  private readonly elRef = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  ngAfterViewInit(): void {
    const el = this.elRef.nativeElement;
    const parent = this.renderer.parentNode(this.elRef.nativeElement);

    while (el.firstChild) {
      this.renderer.insertBefore(parent, el.firstChild, parent.firstChild);
    }

    this.renderer.removeChild(parent, el);
  }
}
