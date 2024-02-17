import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[magnifyingeffect]',
  standalone: true,
})
export class MagnifyingEffect {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @HostBinding('style.transition') transition = '0.3s';
  @HostListener('mouseenter') OnHover() {
    this.renderer.setStyle(this.el.nativeElement, 'scale', '110%');
    this.renderer.setStyle(this.el.nativeElement, 'z-index', '3');
  }
  @HostListener('mouseout') OnBlure() {
    this.renderer.setStyle(this.el.nativeElement, 'scale', '100%');
    this.renderer.setStyle(this.el.nativeElement, 'z-index', '0');
  }
}
