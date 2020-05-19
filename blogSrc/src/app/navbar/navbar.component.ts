import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent implements OnInit {
  pages = [
    {name: "Home", path: "index.html"},
    {name: "Login", path: "#"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
