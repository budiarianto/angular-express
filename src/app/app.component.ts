import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    model = { active: '' };

    constructor(router:Router) { 
        var _model = this.model;
        router.events.forEach((event) => {
          if(event instanceof NavigationStart) {
              console.log(event.url.substr(1) || 'home');
              _model.active = event.url.substr(1) || 'home';
          }
          // NavigationEnd
          // NavigationCancel
          // NavigationError
          // RoutesRecognized
        });
    }

    ngOnInit() {
    }
}
