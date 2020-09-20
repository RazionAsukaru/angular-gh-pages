import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
  isScrolled = false;

  constructor() { }

  ngAfterViewInit(){
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY;
        this.isScrolled = scrollPos > 10
    });
  }

}
