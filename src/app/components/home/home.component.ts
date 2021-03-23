import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  User: SocialUser;

  constructor(
    private _socialAuthService: SocialAuthService,
    public router: Router
  ) { }

  ngOnInit() {
    //****** TO CHECK WHEATHER THE USER IS SIGN IN WITH EMAIL OR NOT */
    this._socialAuthService.authState.subscribe((user: any) => {
      console.log("Response of user details",user);
      this.User = user;
      
    });
  }

  logout() {
    this._socialAuthService.signOut();
    this.router.navigate(['/login']);
  }
}
