import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginSignupService } from '../services/user/login-signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,public _lg:LoginSignupService,private _router:Router) {
    
  }
  logout(){
    this._lg.logout()
    .then((resp)=>{
      this._router.navigate(["/home"]);
      console.log(resp);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

}
