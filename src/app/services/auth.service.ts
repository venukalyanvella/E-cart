import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable, ReplaySubject } from "rxjs";
import firebase from 'firebase/app';
import { User } from '@firebase/auth-types';
import { Router } from '@angular/router';
// import { auth } from "firebase/auth";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: Observable<User>;
  private userDetails: User = null;

  constructor() {}

  isLoggedIn() {
    if (this.userDetails == null) {
      return true;
    }
    else {
      return false;
    }
  }
}
