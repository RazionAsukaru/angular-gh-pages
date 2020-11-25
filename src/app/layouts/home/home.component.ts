import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ScrollState } from '../../state-management/states/scroll.state'
import { ScrollService } from "../scroll.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentScrollElement: Observable<string>;

  subs: Subscription[] = [];

  @ViewChild('home', { static: true }) home: ElementRef;
  @ViewChild('about', { static: true }) about: ElementRef;
  @ViewChild('portofolio', { static: true }) portofolio: ElementRef;
  @ViewChild('services', { static: true }) services: ElementRef;
  @ViewChild('contact', { static: true }) contact: ElementRef;

  constructor(route: ActivatedRoute, private scrollService: ScrollService) {
  }

  ngOnInit(): void {
    this.scrollService.current.subscribe((res: string) => {
      if(res.length){
        this.scrollTo(res, -50);
      }
    });
  }

  scrollTo(el: string, offset: number) {
    if (el === 'home') {
      offset = 0;
    }
    const top = this[el].nativeElement.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({top: top, behavior: 'smooth'});
  }

}
