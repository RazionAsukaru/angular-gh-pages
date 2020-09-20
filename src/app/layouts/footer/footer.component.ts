import { Component, OnInit } from '@angular/core';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faMapMarkedAlt = faMapMarkedAlt;
  constructor() { }

  ngOnInit(): void {
  }

  goToLink(url: string){
    window.open(url, "_blank");
}

}
