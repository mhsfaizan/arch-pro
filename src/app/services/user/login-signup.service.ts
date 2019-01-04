import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {

  constructor(private _auth:AngularFireAuth,private _db:AngularFireDatabase) { 
  }
  signup(signupFormData):Promise<any>{
    const{email,password} = signupFormData;
    return this._auth.auth.createUserWithEmailAndPassword(email,password)
  }
  saveUser(user,id){
    return this._db.database.ref().child("user/"+id).set(user);
  }
  getCurrentUser(){
    return this._auth.auth.currentUser;
  }
  logout(){
    localStorage.removeItem("user");
    return this._auth.auth.signOut();
  }
  login(formObject){
    const{email,password} = formObject;
    return this._auth.auth.signInWithEmailAndPassword(email,password)
  }
  saveDataToLocal(user){
    localStorage.setItem("user",JSON.stringify(user));
  }
  isLoggedIn(){
    return localStorage.getItem("user");
  }
  getUser(){
    return JSON.parse(localStorage.getItem("user"));
  }
}
