import { Directive, ElementRef, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appCarousal]',
})
export class CarousalDirective implements AfterViewInit, OnDestroy {
  constructor(private el: ElementRef, private _render: Renderer2) {
  }
  interval: any;
  ngAfterViewInit() {
    let mainElements = this.el.nativeElement.childNodes[0];
    let mainimage = mainElements.childNodes[0].childNodes[0];
    let images = mainElements.childNodes[1].childNodes;
    this._render.setAttribute(mainimage, "src", images[0].childNodes[0].getAttribute("src"));
    let i = 1;
    for (let j = 0; j < 3; j++) {
      images[j].childNodes[0].addEventListener('click', (event) => {
        this._render.setAttribute(mainimage, "src", event.target.getAttribute("src"));
        i = j;
      })
    }
    this.interval = setInterval(() => {
      this._render.setAttribute(mainimage, "src", images[i].childNodes[0].getAttribute("src"));
      i++;
      if (i > 2) {
        i = 0;
      }
    }, 1500);
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
} 
