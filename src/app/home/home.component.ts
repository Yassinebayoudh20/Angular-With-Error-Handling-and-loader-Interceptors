import { BackendService } from './../services/backend.service';
import { NewsletterService } from './../services/newsletter.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user$: any;

  ngOnInit(): void {
    this.user$ = this.userService.user$;
    this.backendService.getException().subscribe();
  }

  user: User = {
    firstName: 'Alice',
    lastName: 'Smith',
  };

  constructor(
    private newsletterService: NewsletterService,
    private userService: UserService,
    private backendService : BackendService
  ) {}

  subscribe(email: string) {
    this.newsletterService.subscribe(email);
  }

  changeUserName() {
    // this.user = {
    //   firstName: 'Boby',
    //   lastName: 'Smith',
    // };
    this.userService.loadUser({ firstName: 'Bob', lastName: 'Smith' });
  }
}
