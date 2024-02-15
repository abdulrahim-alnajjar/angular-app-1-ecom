import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[customDirective]',
})
export class Highlight {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input('printString') set foo(a: string) {
    console.log(a);
  }
}
