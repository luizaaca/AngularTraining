import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[highlight]'
})

export class HighlightDirective {
    private defaultColor = 'beige';
    private el: HTMLElement;

    constructor(el: ElementRef) {
        this.el = el.nativeElement;
    }

    private highlight(color: string) {
        this.el.style.backgroundColor = color;
    }

    @Input() highlightColor: string;

    @HostListener('mouseenter') onmouseenter() {
        this.highlight(this.highlightColor || this.defaultColor);
    }
    @HostListener('mouseleave') onMouseLeave(){
        this.highlight(null);
    }

}