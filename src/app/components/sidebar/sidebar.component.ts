import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menu = [
    { lablel: 'Home', link: '/home' },
    { lablel: 'Services', link: '/services' },
    { lablel: 'News', link: '/news' },
    { lablel: 'Blog', link: '/blog' },
    { lablel: 'Contact', link: '/contact' }
  ];

  isOpenMenu = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickMenu(sidebarItems: HTMLElement) {
    this.isOpenMenu = !this.isOpenMenu;
    if (this.isOpenMenu) {
      console.log(sidebarItems);
      sidebarItems.style.transform = 'translate3d(0, 0, 0)';
      document.body.style.overflow = 'hidden';
    } else {
      sidebarItems.style.transform = '';
      document.body.style.overflow = '';
    }
  }

  checkRouter(url: string): boolean {
    return this.router.url === url;
  }
}
