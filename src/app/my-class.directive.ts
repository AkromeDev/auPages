import { Directive, ElementRef, Input } from '@angular/core';

// This is a custom directive adding a organge background to the html it is called upon
@Directive({
  selector: '[appMyClass]'
})
export class MyClassDirective {

  // ElementRef allows us to automatically get the HTML-element the directive was called upon to as a parameter.
  constructor(private element: ElementRef) { 
  }

    // element = our parameter
    // nativeElement = the actual HTML element
    // color = color parameter given in the 
    @Input('appMyClass') set myBackgroundColor(color: string) {
      this.element.nativeElement.style.backgroundColor = color;
    }
}
