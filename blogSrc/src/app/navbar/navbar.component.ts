import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent implements OnInit {
  pages = [
    {name: "Home", path: "/home"},
    {name: "Login", path: "/login"}
  ];

  url: string;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
