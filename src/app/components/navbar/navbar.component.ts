import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navItems = [
    {name: 'feature films', path:'/feature-films'},
    {name: 'short films', path:'/short films',subItems: [
      {name: 'thetrical shorts', path:'/'},
      {name: 'disney+', path:'/'},
      {name: 'sparkshorts', path:'/'},
      {name: 'car toons', path:'/'},
      {name: 'toy story toons ', path:'/'},
      {name: 'home entertainment ', path:'/'},
    ]},
    {name: 'technology', path:'/technology',subItems:[
      {name: 'thetrical shorts', path:'/'},
      {name: 'disney+', path:'/'},
      {name: 'sparkshorts', path:'/'},
      {name: 'car toons', path:'/'},
      {name: 'toy story toons ', path:'/'},
      {name: 'home entertainment ', path:'/'},
    ]},
    {name: 'careers', path:'/careers',subItems:[
      {name: 'thetrical shorts', path:'/'},
      {name: 'disney+', path:'/'},
      {name: 'sparkshorts', path:'/'},
      {name: 'car toons', path:'/'},
      {name: 'toy story toons ', path:'/'},
      {name: 'home entertainment ', path:'/'},
    ]},
    {name: 'extras', path:'/extras',subItems:[
      {name: 'thetrical shorts', path:'/'},
      {name: 'disney+', path:'/'},
      {name: 'sparkshorts', path:'/'},
      {name: 'car toons', path:'/'},
      {name: 'toy story toons ', path:'/'},
      {name: 'home entertainment ', path:'/'},
    ]},
    {name: 'about', path:'/about',subItems:[
      {name: 'thetrical shorts', path:'/'},
      {name: 'disney+', path:'/'},
      {name: 'sparkshorts', path:'/'},
      {name: 'car toons', path:'/'},
      {name: 'toy story toons ', path:'/'},
      {name: 'home entertainment ', path:'/'},
    ]},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
