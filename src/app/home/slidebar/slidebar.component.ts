import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slidebar',
  template: `
    <div class="slidebar bg-warning text-white">
      <h1>slidebar works!</h1>
    </div>
  `,
  styles: [
    `
      .slidebar{
        height:300px;
        display:flex;
        justify-content: center;
        align-items: center;
      }
    `
  ]
})
export class SlidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
