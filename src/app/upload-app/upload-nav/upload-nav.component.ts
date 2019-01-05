import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSidenav } from '@angular/material';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-upload-nav',
  templateUrl: './upload-nav.component.html',
  styleUrls: ['./upload-nav.component.css']
})
export class UploadNavComponent implements OnInit {
  @ViewChild("drawer")drawer:MatSidenav

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,private _router: Router) { }
  ngOnInit() {
    this._router.events.subscribe((resp) => {
      if (resp instanceof NavigationEnd) {
        this.drawer.opened = false;
      }
    })
  }

}
