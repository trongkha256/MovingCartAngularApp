import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-header class="bg-primary"></app-header>
<div class="d-flex ">
  <app-slidebar class="w-25"></app-slidebar>
  <app-content class="w-75"></app-content>
</div>

<app-footer></app-footer>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
