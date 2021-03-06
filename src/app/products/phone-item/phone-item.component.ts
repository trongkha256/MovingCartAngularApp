import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-item',
  template: `
    <div class="container">
            <div class="card bg-light" style="width:300px">
              <img class="card-img-top" src="assets/img/sp_iphoneX.png" alt="Card image" style="max-width:100%; height: 250px;">
              <div class="card-body text-center">
                <h4 class="card-title text-center">iPhone X</h4>
                <p class="card-text">iPhone X features a new all-screen design. Face ID, which makes your face your password</p>
                <a href="#" class="btn btn-primary">Detail</a>
                <a href="#" class="btn btn-danger">Cart</a>
              </div>
            </div>
          </div>
  `,
  styles: [
  ]
})
export class PhoneItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
