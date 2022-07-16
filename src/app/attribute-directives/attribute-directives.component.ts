import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  template: `
    <div>
      <!-- Cách 1-->
      <h1>Class Binding</h1>
      <h3 class="text-center" [class.text-primary]="isActive">Angular FE71</h3>
      <!-- Cách 2-->
      <h3 class="text-center" [class]="{'text-primary':isActive,
    'bg-danger':isActive}">Angular FE71</h3>

      <button (click)="isActive= !isActive">Toggle</button>
      <br />
      <br />
      <h1>Style Binding</h1>
      <div style="width:200px; height:300px" [style]="{'background-image':'url('+imgUrl+')'}"></div>

    </div>
  `,
  styles: [
  ]
})
export class AttributeDirectivesComponent implements OnInit {
  isActive = true;
  imgUrl = "https://i.picsum.photos/id/604/200/300.jpg?hmac=6ceMKS8u7easDoKzWSaIiSTpRlTPn1OUOdfSJWou3uQ"

  constructor() { }

  ngOnInit(): void {
  }

}
