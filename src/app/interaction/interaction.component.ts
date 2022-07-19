import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'app-interaction',
  template: `
    <div>
      <h1>Input</h1>
      <app-user name="Bob" [age]="18" ></app-user>
      <app-user [name]="user.name" [age]="user.age" ></app-user>
      <br />
      <h1>Output</h1>
      <div class="conatiner">
        <div class="row">
          <div *ngFor="let movie of movies" class="col-sm-4">
            <app-movie [movie]="movie" (onDelete)="handleDelete($event)"></app-movie>
          </div>
        </div>
      </div>
    </div>
    <h1 class="text-center">Custom two-way binding</h1>
    <div class="toggle">
      <!-- <app-toggle [isActive]="isActive" (changeIsActive)="handleToggle($event)"></app-toggle>
      Áp dụng two-way
    -->
    <app-toggle [(isActive)]="isActive" #toggle></app-toggle>

    <h1>ViewChild</h1>
    <button (click)="toggle.handleToggle()" >Hihi Change</button>
    <button (click)="handleToggle()" >Hihi Change class</button>
    <br />
    <h1>ViewChildren</h1>
    <app-toggle></app-toggle>
    <app-toggle></app-toggle>
    <app-toggle></app-toggle>
    <button (click)="handleToggle()">Toggle</button>



    </div>

  `,
  styles: [
    `
      .toggle{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;

      }
    `
  ]
})
export class InteractionComponent implements OnInit {
  @ViewChild('toggle') toggleComp!: ToggleComponent;
  @ViewChildren(ToggleComponent) toggleComps!: QueryList<ToggleComponent>
  isActive = true;
  user = {
    name: 'HJIHI',
    age: 28
  }
  movies = [
    {
      maPhim: 8902,
      tenPhim: 'DOCTOR STRANGE IN THE MULTIVERSE OF MADNESS 321',
      hinhAnh:
        'https://movienew.cybersoft.edu.vn/hinhanh/doctor-strange-in-the-multiverse-of-madness_gp01.jpg',
      moTa: 'Trailer mới Doctor Strange In The Multiverse Of Madness hé lộ một nhân vật bí ẩn dường như là giáo sư X phiên bản già Patrick Stewart. Cả giáo sư X phiên bản trẻ (James McAvoy) và Jean Grey (Sophie Turner) đều có tin xuất hiện ở phim trường Phù Thủy Tối Thượng Trong Đa Vũ Trụ Hỗn Loạn. Đặc biệt nhất là lời đồn không tưởng về việc Tom Cruise sẽ trở thành Iron Man mới đang lan truyền rộng rãi.',
    },
    {
      maPhim: 8909,
      tenPhim: 'JURASSIC WORLD DOMINION  ',
      hinhAnh:
        'https://movienew.cybersoft.edu.vn/hinhanh/jurassic-world-dominion_gp01.jpg',
      moTa: 'Bốn năm sau kết thúc Jurassic World: Fallen Kingdom, những con khủng long đã thoát khỏi nơi giam cầm và tiến vào thế giới loài người. Giờ đây, chúng xuất hiện ở khắp mọi nơi. Sinh vật to lớn ấy không còn chỉ ở trên đảo như trước nữa mà gần ngay trước mắt, thậm chí còn có thể chạm tới ',
    },
    {
      maPhim: 9001,
      tenPhim: 'PHI CÔNG SIÊU ĐẲNG MAVERICK  ',
      hinhAnh:
        'https://movienew.cybersoft.edu.vn/hinhanh/phi-cong-sieu-dang-maverick_gp01.jpg',
      moTa: 'Pete “Maverick” Mitchell từng nổi danh là một phi công thử nghiệm quả cảm hàng đầu của Hải quân. Sau hơn ba mươi năm phục vụ, anh né tránh cơ hội thăng chức khiến bản thân cảm thấy bị bó buộc, để trở về làm chính mình - một đại úy. Trong đợt đào tạo biệt đội tại trường quân sự Top Gun cho nhiệm vụ chuyên biệt chưa từng có, Maverick chạm trán với Trung úy Bradley Bradshaw (Miles Teller) - con trai của người bạn thân quá cố Nick Bradshaw.   Với nhiệm vụ lần này, không chỉ đối mặt với những thử thách nguy hiểm đến tính mạng, Pete Mitchell còn đối mặt với bóng ma quá khứ, nỗi sợ hãi sâu thẳm trong thâm tâm. Xem thêm tại: https://www.galaxycine.vn/dat-ve/top-gun-maverick  Xem thêm tại: https://www.galaxycine.vn/dat-ve/top-gun-maverick',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }
  handleDelete(movieId: number) {
    this.movies = this.movies.filter((movie) => movie.maPhim != movieId)
  }
  // handleToggle(status: boolean) {
  //   console.log(status)
  // }
  handleToggle() {
    this.toggleComps.forEach((item) => {
      item.handleToggle();
    });
  }

}
