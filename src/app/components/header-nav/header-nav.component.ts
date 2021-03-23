import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  User: SocialUser;

  constructor(
    private _socialAuthService: SocialAuthService
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
  }
}
