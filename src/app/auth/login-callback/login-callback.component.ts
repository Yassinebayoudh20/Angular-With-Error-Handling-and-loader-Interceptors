import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-login-callback',
  templateUrl: './login-callback.component.html',
  styleUrls: ['./login-callback.component.scss'],
})
export class LoginCallbackComponent implements OnInit {
  accessToken: string = '';
  userData$ : Observable<any> = of({});
  isAuthenticated = false;
  constructor(
    private route: Router,
    public oidcSecurityService: OidcSecurityService
  ) {}

  ngOnInit(): void {
    this.userData$ = this.oidcSecurityService.userData$;

    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated }) => {
      this.isAuthenticated = isAuthenticated;
      console.log('app authenticated', isAuthenticated);
    });
  }

  signout() {
    this.oidcSecurityService.logoffAndRevokeTokens();
    sessionStorage.clear();
    localStorage.clear();
  }

  showAccessToken() {

    this.oidcSecurityService.getAccessToken().subscribe((data) => {console.log(data); this.accessToken = data});
    this.userData$ = this.oidcSecurityService.userData$;
  }

  login(): void {
    console.log('start login');

    this.oidcSecurityService.authorize();
}
}
