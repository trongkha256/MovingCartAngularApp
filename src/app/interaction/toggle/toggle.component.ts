import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle',
  template: `
    <div class="toggle"
      [class]="{
        'bg-danger': !isActive,
        'bg-success': isActive
      }"
      (click)="handleToggle()"
    >
    </div>
  `,
  styles: [
    `
        .toggle{
          width:100px;
          height:100px;
          border-radius: 999px;
          cursor:pointer;
        }
      `
  ]
})
export class ToggleComponent implements OnInit {
  @Input() isActive = false;
  @Output() isActiveChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  handleToggle() {
    this.isActive = !this.isActive;
    this.isActiveChange.emit(this.isActive);
  }

}
