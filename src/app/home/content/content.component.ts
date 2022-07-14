import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
    <div class="content bg-success text-white">
      <h1>content works!</h1>
    </div>
  `,
  styles: [
    `
      .content{
        height:300px;
        display:flex;
        justify-content: center;
        align-items: center;
      }
    `
  ]
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
