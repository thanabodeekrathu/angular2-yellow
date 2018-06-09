import { Component, OnInit, Input  } from '@angular/core';
import templateString from './my_button.html';

@Component({
  selector: 'app-wow-wow',
  template: templateString,
  providers: []
})
export class MyButtonComponent {
  @Input() btnText: string;
  private mosState: boolean;

  constructor() { }

  ngOnInit() {
    this.mosState = true
    this.btnText += " hi domo!!"
  }

  mosmos() {
    setTimeout(() => this.mosState = true, 100);
    setTimeout(() => this.mosState = false, 300);
    setTimeout(() => this.mosState = true, 400);
    setTimeout(() => this.mosState = false, 500);
    setTimeout(() => this.mosState = true, 600);
    setTimeout(() => this.mosState = false, 700);
    setTimeout(() => this.mosState = true, 800);
    setTimeout(() => this.mosState = false, 1100);
    setTimeout(() => this.mosState = true, 1400);
    setTimeout(() => this.mosState = false, 1600);
    setTimeout(() => this.mosState = true, 1800);
    setTimeout(() => this.mosState = false, 1900);
    setTimeout(() => this.mosState = true, 2100);
    setTimeout(() => this.mosState = false, 2500);
    setTimeout(() => this.mosState = true, 3000);
  }

}
