import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginSignupService } from '../services/user/login-signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  professions: string[] = ["Architect", "Architecture Student", "Interior Designer", "Others"];
  isShowLoad: boolean = false;
  constructor(private _login: LoginSignupService, private _router: Router) { }

  ngOnInit() {

  }
  signUpForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/)]),
    profession: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    cpassword: new FormControl('', [Validators.required]),
  });
  getPassword(signup) {
    const { password } = signup.value; //destructing
    return password;
  }
  submitUserData() {
    this.isShowLoad = true;
    this._login.signup(this.signUpForm.value)
      .then((resp) => {
        console.log(resp);
        const { name, email, mobile, country, city, profession } = this.signUpForm.value; //destructing
        let user = { name, email, mobile, country, city, profession } //object shorthand litral
        this._login.login(user, resp.user.uid)
          .then((resp) => {
            this.isShowLoad = false;
            this._router.navigate(['/dashboard']);
          })
          .catch((err) => {
            this.isShowLoad = false;
            console.log(err);
          })
      })
      .catch((err) => {
        this.isShowLoad = false;
        console.log(err);
      })
  }
}
