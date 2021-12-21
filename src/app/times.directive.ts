import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>,
  ) {}
    @Input('appTimes') set render(times: number) {
      this.viewContainer.clear();

      for (let i= 0; i < times; i++) {
        // This take a look at the viewContainer and create some new HTML inside
        // The templateRef is the HTML that is inside of the element we applied our directive to
        this.viewContainer.createEmbeddedView(this.templateRef, {
          // This will give us the possibilit to use alias in order to get acces to this variable
          index: i
        });
      }
    }
}
