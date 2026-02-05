import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFadeUp]',
})
export class FadeUp implements AfterViewInit{

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const element = this.el.nativeElement;
    console.log('FadeUp applied to:', element);

    element.classList.add('fade-up');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('visible');
          observer.unobserve(element); 
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
  }
}
