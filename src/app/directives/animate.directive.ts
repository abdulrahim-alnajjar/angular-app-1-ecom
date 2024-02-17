import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[animate-hover]',
  standalone: true,
})
export class Animate {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @Input('animate-hover') value: string;

  @HostListener('mouseenter') OnHover() {
    this.renderer.addClass(this.el.nativeElement, 'animate__animated');
    this.renderer.addClass(this.el.nativeElement, this.value);
    setTimeout(() => {
      this.renderer.removeClass(this.el.nativeElement, this.value);
    }, 1000);
    console.log(this.value);
  }
}
