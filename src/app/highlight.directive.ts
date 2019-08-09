import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
 
  constructor( private ele:ElementRef) { }

    changeColor(color: string){
        this.ele.nativeElement.style.backgroundColor=color;
    }
    changeForegroundColor(color:string){
      this.ele.nativeElement.style.color=color;
    }

@HostListener('mouseenter')
  onMouseEnter(){
  this.changeColor('darkgrey');
  this.changeForegroundColor('white');
  }

@HostListener('mouseleave')
  onMouseleave(){
    this.changeColor(null);
    this.changeForegroundColor(null);
  }



}