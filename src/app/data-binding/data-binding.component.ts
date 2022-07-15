import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  template: `
    <div>
      <h1>Interpolation</h1>
      <p>Message: {{message}}</p>
      <p>Name: {{student.name}} - Email: {{student.email}}</p>

      <h1>Property binding</h1>
      <input type="text" [value]="student.name" [disabled]="isDisabled"/>
      <br>
      <h1>Event binding</h1>
      <button (click)="handleAlert()" class="bg-success" >CLick</button>

      <h1>Both: Property and Event binding</h1>
      <h2>{{username}}</h2>
      <input type="text" placeholder="Username" [value]="username" (input)="changeUsername($event)">

      <h1>Two-way binding</h1>
      <p>Email: {{email}}</p>
      <input type="text"placeholder="Email" [(ngModel)]="email">

      <h1>Referance variable</h1>
      <input type="text" placeholder="Address" #address>
      <button (click)="showAddress(address.value)">Show Address</button>
    </div>
  `,
  styles: [
  ]
})
export class DataBindingComponent implements OnInit {
  @ViewChild('address') address!: ElementRef<HTMLInputElement>;
  message = "Hello";
  student = {
    name: "Kha",
    email: "trongkha256@gmail.com",
  }
  isDisabled = true
  username = ""
  email = ""

  constructor() { }

  ngOnInit(): void {
  }
  handleAlert() {
    alert("Kha đẹp trai quá đi")
  }
  changeUsername(event: Event) {
    if (event.target instanceof HTMLInputElement)
      this.username = event.target.value
  }
  showAddress(value: string) {
    alert(value)
  }

}
