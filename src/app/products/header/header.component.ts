import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <!--BEGIN NAVBAR-->
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container-fluid">
        <a href="#" class="navbar-brand">CyberSoft</a>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#myMenu">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="myMenu">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a href="#" class="nav-link active">Home</a>
            </li>
             <li class="nav-item">
              <a href="#" class="nav-link">News</a>
            </li>
             <li class="nav-item dropdown">
              <a href="#" class="nav-link" data-toggle="dropdown">Products</a>
              <div class="dropdown-menu">
                <a href="#" class="dropdown-item">Smarphone</a>
                <a href="#" class="dropdown-item">Laptop</a>
              </div>
            </li>
             <li class="nav-item">
              <a href="#" class="nav-link">Forum</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- END NAVBAR -->
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
