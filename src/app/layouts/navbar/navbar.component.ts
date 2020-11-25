import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
  isScrolled = false;

  constructor(private scrollService: ScrollService) { }

  ngAfterViewInit(){
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY;
        this.isScrolled = scrollPos > 10
    });
  }

  scrollTo(elementName: string) {
    this.scrollService.update(elementName);
  }

}
