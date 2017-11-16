import { Directive, ElementRef, OnInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {

  @Input() appColor: string;

  ngOnInit(): void {
    console.log(this.el);
    if ( !this.appColor ) {
      this.appColor = 'pink';
    }
    this.el.nativeElement.innerText = '';
    // this.renderer.setProperty(this.el.nativeElement, 'textContent', '');
    const text = this.renderer.createText('Ingreso el color: ' + this.appColor);
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.appColor);
    this.renderer.appendChild(this.el.nativeElement, text);

    // this.el.nativeElement.style.backgroundColor = this.appColor;
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }



}
