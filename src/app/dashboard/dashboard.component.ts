import { Component, OnInit } from '@angular/core';
import { LoginSignupService } from '../services/user/login-signup.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _lg:LoginSignupService) { 
    console.log(_lg.getUser());
  }

  ngOnInit() {
  }

}
