import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="header bg-primary text-white">
      <h1>header works!</h1>
    </div>
  `,
  styles: [

    `
      .header{
        height: 200px;
        display:flex;
        justify-content: center;
        align-items:center;
      }
    `
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
