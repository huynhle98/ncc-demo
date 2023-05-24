import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
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

  constructor(private router: Router, private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  onClickMenu() {
    this.isOpenMenu = !this.isOpenMenu;
    const sidebarItemsEl = this.elementRef.nativeElement.querySelector('.sidebar-items') as HTMLElement
    if (this.isOpenMenu && sidebarItemsEl) {
      sidebarItemsEl.style.transform = 'translate3d(0, 0, 0)';
      document.body.style.overflow = 'hidden';
    } else {
      sidebarItemsEl.style.transform = '';
      document.body.style.overflow = '';
    }
  }

  checkRouter(url: string): boolean {
    return this.router.url === url;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth <= 768) {
      this.isOpenMenu = true;
      this.onClickMenu();
    }
  }
}
