import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt-product-management',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header bg-dark text-white">
              Quản lý danh mục sản phẩm
            </div>
            <div class="card-body">
              <div class="mb-3">
                <label class="form-label">Mã SP</label>
                <input type="text" class="form-control"
                [(ngModel)]="product.id"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Tên SP</label>
                <input type="text" class="form-control"
                [(ngModel)]="product.name"/>
              </div>
              <div class="mb-3">
                <label class="form-label">Giá SP</label>
                <input type="text" class="form-control"
                [(ngModel)]="product.price"/>
              </div>
              <button (click)="createProduct()" class="btn btn-success">Thêm sản phẩm</button>

            </div>
          </div>

          <table class="table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã SP</th>
                <th>Tên SP</th>
                <th>Giá SP</th>
              </tr>
            </thead>
            <tbody>
              <ng-container *ngFor="let product of products; index as i" >
                <tr [class]="{
                'bg-primary': i%2===0
              }">
                  <td>
                    {{i+1}}
                  </td>
                  <td>
                    {{product.id}}
                  </td>
                  <td>
                    {{product.name}}
                  </td>
                  <td>
                    {{product.price}}
                  </td>
                </tr>

              </ng-container>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class BtProductManagementComponent implements OnInit {
  product = {
    id: "",
    name: "",
    price: "",
  }
  products: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  createProduct() {
    this.products.push({ ...this.product })
  }

}
