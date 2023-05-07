import { Observable } from 'rxjs';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, //Detect change based on Object Ref instead of instance
})
export class NewsletterComponent implements OnInit {
  @Input() user$!: Observable<User> | null; // the Input will be unMutated (Unchangable) in OnPush ChangeDetectionStrategy

  firstname!: string;

  @Output() subscribe = new EventEmitter();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.user$.subscribe((user) => {
      this.firstname = user.firstName;
    });
  }

  subscribeToNewsletter(email: string) {
    this.subscribe.emit(email);
  }
}
