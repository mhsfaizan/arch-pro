import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {

  constructor(private _auth:AngularFireAuth,private _db:AngularFireDatabase) { }
  signup(signupFormData):Promise<any>{
    const{email,password} = signupFormData;
    return this._auth.auth.createUserWithEmailAndPassword(email,password)
  }
  login(user,id){
    return this._db.database.ref().child("user/"+id).set(user);
  }
}
