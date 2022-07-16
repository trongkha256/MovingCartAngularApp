import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie',
  template: `
    <div class="card text-start">
      <img class="card-img-top" [src]="movie.hinhAnh" alt="movie">
      <div class="card-body">
        <h4 class="card-title">{{movie.tenPhim}}</h4>
        <p class="card-text">{{movie.moTa}}</p>
        <button class="btn btn-danger" (click)="handleDelete(movie.maPhim)">Delete</button>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class MovieComponent implements OnInit {
  @Input() movie: any = {};

  @Output() onDelete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  handleDelete(movieId: number) {
    this.onDelete.emit(movieId)
  }

}
