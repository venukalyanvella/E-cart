import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AuthService } from 'src/app/services/auth.service';
declare var FB: any;
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any = '';
  password: any = '';
  @ViewChild('userForm', { static: true }) userForm: NgForm;
  User: SocialUser;

  constructor(
    private auth: AuthService,
    public router: Router,
    public toastr: ToastrManager,
    public _socialAuthService: SocialAuthService,
    public _AngularFire:AngularFireAuth
  ) { }

  ngOnInit() {
    // ===================== FACEBOOK AUTHENTICATION CODE ====================
    (window as any).fbAsyncInit = function () {
      FB.init({
        appId: '1012937675861679',
        cookie: true,
        xfbml: true,
        version: 'v3.1'
      });
      FB.AppEvents.logPageView();
    };
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    // =====================END FACEBOOK AUTHENTICATION CODE ===================

    //****** TO CHECK WHEATHER THE USER IS SIGN IN WITH EMAIL OR NOT */
    this._socialAuthService.authState.subscribe((user: any) => {
      console.log("Response of user details",user);
      this.User = user;
    });
  }

  // ===================== GOOGLE AUTHENTICATION CODE ========================
  signInWithGoogle(): any {
    this._socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user: any) => {
      console.log("Get email logged in user details", user);
      this.toastr.successToastr('Login successful');
      this.router.navigate([`/home`]);
    }).catch((err: any) => {
      this.toastr.errorToastr('Error while login with gmail.');
      console.log("Error while user login into site", err);
    });
  }

  // ===================== FACEBOOK AUTHENTICATION CODE ========================
  signInWithFacebook(): any {
    this._socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((user: any) => {
      console.log("Get facebook logged in user details", user);
      this.toastr.successToastr('Login successful');
      this.router.navigate([`/home`]);
    }).catch((err: any) => {
      console.log("Error while user login into site", err);
      this.toastr.errorToastr('Error while login with facebook.');
    });
  }

  // =================== SIGNIN WITH EMAIL AND PASSWORD ==========================

  signinWithEmailAndPassword(email:any,password:any){
    this._AngularFire.signInWithEmailAndPassword(email,password).then(
      (user)=>{
        console.log('Get user details ', user);
        this.toastr.successToastr('Login Successfull');
        this.router.navigate(['/home'])
        
      })
      .catch((error:any)=>{
        console.log('Error while Login ', error);
        this.toastr.errorToastr('Error While Login with Email/Password');        
      })

  }
}
