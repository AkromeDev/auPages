import { Directive, ElementRef } from '@angular/core';

// This is a custom directive adding a organge background to the html it is called upon
@Directive({
  selector: '[appMyClass]'
})
export class MyClassDirective {

  // ElementRef allows us to automatically get the HTML-element the directive was called upon to as a parameter.
  constructor(private element: ElementRef) { 

    // element = our parameter
    // nativeElement = the actual HTML element
    this.element.nativeElement.style.backgroundColor = 'orange';
  }

}
