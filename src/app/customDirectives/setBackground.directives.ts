import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[setBackground]'
})
export class setBackground implements OnInit {

    @Input() bgColor: string = 'black';
    @Input() textColor: string = 'white';

    constructor(
        private element: ElementRef,
        private renderer: Renderer2
    ){ }
    
    ngOnInit(){
        // this.element.nativeElement.style.background = 'BLACK';
        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.bgColor);
        this.renderer.setStyle(this.element.nativeElement, 'color', this.textColor);
    }

}