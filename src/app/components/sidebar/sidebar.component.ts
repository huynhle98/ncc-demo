import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menu = [
    { lablel: 'Home' },
    { lablel: 'Services' },
    { lablel: 'News ' },
    { lablel: 'Blog' },
    { lablel: 'Contact' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
