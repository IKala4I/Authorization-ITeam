import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserWithId} from 'src/app/interfaces/user';
import {UserService} from 'src/app/services/user.service';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'auth-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit, OnDestroy {

  users: UserWithId[];
  untilSubject$ = new Subject<void>();

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers()
      .pipe(
        takeUntil(this.untilSubject$)
      )
      .subscribe(users => this.users = users);
  }

  ngOnDestroy() {
    this.untilSubject$.next();
    this.untilSubject$.complete();
  }
}
