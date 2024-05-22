import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('mouseenter') OnMoseEnter(){
    this.renderer.addClass(this.element.nativeElement, 'product-highlight');
  }

  @HostListener('mouseout') OnMouseOut(){
    this.renderer.removeClass(this.element.nativeElement, 'product-highlight');
  }


  /*
  @HostBinding('style.background') backgroudClr: string = 'black';
  @HostBinding('style.color') textColor: string = 'red';
  */


}
