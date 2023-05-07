import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';
import { LoginCallbackComponent } from './login-callback/login-callback.component';
import { LogoutCallbackComponent } from './logout-callback/logout-callback.component';

@NgModule({
  imports: [
    CommonModule,
    AuthModule.forRoot({
      config: {
        authority: 'https://localhost:7017',
        redirectUrl: 'http://localhost:4200/login-callback',
        postLogoutRedirectUri: 'http://localhost:4200/logout-callback',
        clientId: 'Angular',
        scope: 'openid profile email roles offline_access', // 'openid profile ' + your scopes
        responseType: 'code',
        silentRenew: false,
        renewTimeBeforeTokenExpiresInSeconds: 10,
      },
    }),
  ],
  exports: [AuthModule],
  declarations: [LoginCallbackComponent, LogoutCallbackComponent],
})
export class AuthConfigModule {}
