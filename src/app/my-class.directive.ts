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
    @Input('appMyClass') set classNames(classObj: any) {
      for (let key in classObj) {
        if (classObj[key]) {
          this.element.nativeElement.classList.add(key);
        } else {
          this.element.nativeElement.classList.remove(key);
        }
      }
    }
}
