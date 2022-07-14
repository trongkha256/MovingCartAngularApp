import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `
    <!-- BEGIN CAROUSEL -->
    <div id="demo" class="carousel slide" data-ride="carousel">

      <!-- Indicators -->
      <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>

      <!-- The slideshow -->
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="assets/img/slide_1.jpg" alt="Los Angeles" width="100%" height="500">
        </div>
        <div class="carousel-item">
          <img src="assets/img/slide_2.jpg" alt="Chicago" width="100%" height="500">
        </div>
        <div class="carousel-item">
          <img src="assets/img/slide_3.jpg" alt="New York" width="100%" height="500">
        </div>
      </div>

      <!-- Left and right controls -->
      <a class="carousel-control-prev" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>
    <!-- END CAROUSEL -->
  `,
  styles: [
    `
        /* Make the image fully responsive */
  .carousel-inner img {
      width: 100%;
     height: 600px;
  }
    `
  ]
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
