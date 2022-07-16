import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  template: `
   <div>
    <h1>
      NgIf 1; ẩn hiện template/view/element
    </h1>
    <button (click)="isVisible=!isVisible" class="bg-success">Toggle Visible</button>
    <!-- Khi isVisible true thì hiển thị h3 -->
    <h3 *ngIf="isVisible"> Kha đẹp trai</h3>
    <br/>
    <br/>
    <!-- Đã login -->
    <div *ngIf="isLogin; else LoginTemplate">
      <h1>Wellcome</h1>
      <button (click)="isLogin=false">Logout</button>
    </div>

    <ng-template #LoginTemplate>
      <div>
        <h1>Please Login</h1>
        <button (click)="isLogin=true">Login</button>
      </div>
    </ng-template>

    <br />
     <!-- switch case-->
     <div [ngSwitch]="color">
      <span *ngSwitchCase="'primary'" class="bg-primary">Primary</span>
      <span *ngSwitchCase="'success'" class="bg-success">Success</span>
      <span *ngSwitchDefault>Default</span>
    </div>
    <br />
    <select [(ngModel)]="color">
      <option value="">Default</option>
      <option value="success">Success</option>
      <option value="primary">Primary</option>
    </select>
    <br />
    <br />
    <ng-container *ngFor="let product of products; index as idx">
      <p *ngIf="product">
        Product Name: {{idx+1}}+ {{product.name}}
      </p>
    </ng-container>
    <!-- Tái sử dụng UI bằng cách ket hợp ng-teamplate và ng-container-->

    <ng-template #alertTemplate>
      <div class="alert alert-danger">
        <strong>Something went wrong</strong>
      </div>
    </ng-template>

    <ng-container *ngTemplateOutlet="alertTemplate"></ng-container>

   </div>
  `,
  styles: [
  ]
})
export class StructuralDirectivesComponent implements OnInit {
  isVisible = false;
  isLogin = false;
  color = "primary"
  products = [
    { id: 1, name: "IP 13" },
    { id: 2, name: "IP 14" },
    { id: 3, name: "IP 15" },
    { id: 4, name: "IP 16" },
    { id: 5, name: "IP 17" },
    { id: 6, name: "IP 18" },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
