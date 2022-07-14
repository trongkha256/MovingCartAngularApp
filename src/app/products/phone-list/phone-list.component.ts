import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-list',
  template: `
    <!-- BEGIN SMARTPHONE -->
    <section id="smartphone" class="container-fluid pt-5 pb-5">
      <h1 class="text-white text-center">BEST SMARTPHONE</h1>
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
          <div class="container">
            <app-phone-item></app-phone-item>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
          <app-phone-item></app-phone-item>
        </div><div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
          <app-phone-item></app-phone-item>
        </div><div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
          <app-phone-item></app-phone-item>
        </div>
      </div>
    </section>
    <!-- END SMARTPHONE -->
  `,
  styles: [
  ]
})
export class PhoneListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
