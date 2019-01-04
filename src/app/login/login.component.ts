import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginSignupService } from '../services/user/login-signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isShowLoad:boolean = false;
  constructor( private _lg:LoginSignupService,private _router:Router) { }
  // checked:boolean = true;
  ngOnInit() {
  }
  loginForm = new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    checked:new FormControl(true)
  })
  login(formObject){
    this.isShowLoad = true;
    this._lg.login(formObject)
    .then((resp)=>{
      this.isShowLoad = false;
      this._lg.saveDataToLocal(resp.user);
      this._router.navigate(["/dashboard"]);
    })
    .catch((err)=>{
      this.isShowLoad = false;
      console.log(err);
    })
  }
}
