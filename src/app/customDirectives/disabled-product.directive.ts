import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDisabledProduct]'
})
export class DisabledProductDirective implements OnInit {



  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(){
    
    // console.log(this.appDisabledProduct);
  }
  @Input() set appDisabledProduct(disabled: boolean){
    if(disabled == false){
      this.renderer.addClass(this.element.nativeElement, 'disabled');
    }
  }

}
