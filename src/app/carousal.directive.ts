import { Directive, ElementRef, Renderer2, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appCarousal]',
})
export class CarousalDirective implements OnInit, OnDestroy {
  constructor(private el: ElementRef, private _render: Renderer2) {
  }
  interval: any;
  ngOnInit() {
    setTimeout(execute, 0);
    let that = this;
    function execute() {
      let mainElements = that.el.nativeElement;
      let mainimage = mainElements.childNodes[0].childNodes[0];
      let images = mainElements.childNodes[1].childNodes;
      that._render.setAttribute(mainimage, "src", images[1].childNodes[0].getAttribute("src"));
      that._render.setProperty(mainElements.childNodes[0].childNodes[1], 'innerHTML', images[1].childNodes[0].getAttribute("alt"));
      let i = 1;
      for (let j = 1; j <= 3; j++) {
        images[j].childNodes[0].addEventListener('click', (event) => {
          that._render.setAttribute(mainimage, "src", event.target.getAttribute("src"));
          that._render.setProperty(mainElements.childNodes[0].childNodes[1], 'innerHTML', event.target.getAttribute("alt"));
          i = j;
        })
      }
      that.interval = setInterval(() => {
        that._render.setAttribute(mainimage, "src", images[i].childNodes[0].getAttribute("src"));
        that._render.setProperty(mainElements.childNodes[0].childNodes[1], 'innerHTML', images[i].childNodes[0].getAttribute("alt"));
        i++;
        if (i > 3) {
          i = 1;
        }
      }, 1500);
    }
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
} 
