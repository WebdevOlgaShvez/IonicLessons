import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  techs = [
    {
      title: 'Angular',
      icon: 'angular',
      description: 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
      color: '#E63135'
    },
    {
      title: 'CSS3',
      icon: 'css3',
      description: 'The latest version of cascading stylesheets - the styling language of the web!',
      color: '#0CA9EA'
    }];

constructor(private router: Router) {

}


ngOnInit(): void {
}

  showDetail(tech) {

    console.log(tech.description);

  }
}
