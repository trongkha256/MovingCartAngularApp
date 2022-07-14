import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  template: `
    <div class="bg-dark">
      <app-header></app-header>
      <app-banner></app-banner>
      <app-phone-list></app-phone-list>
      <app-lap-list></app-lap-list>
      <app-footer></app-footer>
    </div>

  `,
  styles: [
  ]
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
