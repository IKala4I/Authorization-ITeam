import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from 'src/app/services/user.service';
import {Subject, takeUntil} from 'rxjs';
import {User} from 'src/app/interfaces/user';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from '@angular/material/table';

@Component({
  selector: 'auth-users',
  standalone: true,
  imports: [
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCellDef
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit, OnDestroy {

  users: User[];
  untilSubject$ = new Subject<void>();
  displayedColumns:string[]=['name', 'lastName', 'position', 'role', 'education', 'dateOfBirth']

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
