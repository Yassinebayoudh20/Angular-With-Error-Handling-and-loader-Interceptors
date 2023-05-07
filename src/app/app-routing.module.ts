import { LogoutCallbackComponent } from './auth/logout-callback/logout-callback.component';
import { LoginCallbackComponent } from './auth/login-callback/login-callback.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoLoginPartialRoutesGuard } from 'angular-auth-oidc-client';
import { HomeComponent } from './home/home.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

const routes: Routes = [
  // {path : '' , redirectTo : "home" , pathMatch : "full"},
  // {path : "home" , component : HomeComponent,canActivate:[AutoLoginPartialRoutesGuard]},
  // {path : "login-callback" , component : LoginCallbackComponent},
  // {path : "logout-callback" , component : LogoutCallbackComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
