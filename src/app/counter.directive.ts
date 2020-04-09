import { Directive,ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appCounter]'
})
export class CounterDirective {
x=0;
el:any;
  constructor(private elem:ElementRef) {
   }
   ngOnInit() {
    console.log(this.elem.nativeElement.innerText);
    
    this.x = document.querySelectorAll('.widget').length;
    this.el = document.querySelectorAll('.count');
    this.el[0].innerText = ' Widjet count is:' + this.x;
  }
  @Output('clickOutside') clickOutside: EventEmitter<any> = new EventEmitter();
@HostListener('document:click', ['$event.target']) onMouseEnter(targetElement) {
  if (targetElement.type == 'submit') {
    this.el[0].innerText = ' Widjet count is:' + 1;
    let element = document.querySelectorAll('.widget');
    for(let i=1; i<this.x; i++){
      element[i].className = 'hide';
    }
  }
}

}
