import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <div>
      <h1>name: {{name}}</h1>
      <h1>age: {{age}}</h1>
    </div>
  `,
  styles: [
  ]
})
export class UserComponent implements OnInit {
  @Input() name: string = "";
  @Input() age: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
