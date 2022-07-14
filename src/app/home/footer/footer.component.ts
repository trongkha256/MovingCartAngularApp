import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="footer bg-danger text-white">
      <h1>footer works!</h1>
    </div>
  `,
  styles: [
    `
      .footer{
        height: 200px;
        display:flex;
        justify-content: center;
        align-items:center;
      }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
