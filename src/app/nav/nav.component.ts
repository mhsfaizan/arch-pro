import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginSignupService } from '../services/user/login-signup.service';
import { Router, NavigationEnd } from '@angular/router';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @ViewChild('drawer') drawer: MatSidenav;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, public _lg: LoginSignupService, private _router: Router) {

  }
  ngOnInit() {
    this._router.events.subscribe((resp) => {
      if (resp instanceof NavigationEnd) {
        if (window.screen.width < 768) {
          this.drawer.opened = false;
        }
      }
    })
  }
  logout() {
    this._lg.logout()
      .then((resp) => {
        this._router.navigate(["/home"]);
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
