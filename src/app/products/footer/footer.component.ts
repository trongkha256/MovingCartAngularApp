import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
        <!-- BEGIN PROMOTOPN -->
        <section id="promotion" class="container-fluid pt-5 pb-5">
      <h1 class="text-center text-white">PROMOTION</h1>
      <div class="container bg-light pt-5 pb-5">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-4">
            <div class="container">
              <img src="assets/img/promotion_1.png" alt="" style="max-width: 100%">
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4">
            <div class="container">
              <img src="assets/img/promotion_2.png" alt="" style="max-width: 100%">
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4">
            <div class="container">
              <img src="assets/img/promotion_3.jpg" alt="" style="max-width: 100%">
            </div>
          </div>
        </div>
      </div>

    </section>
    <!-- END PROMOTION -->
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
