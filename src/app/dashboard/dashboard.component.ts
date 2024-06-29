import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, switchMap, takeUntil} from 'rxjs';
import {AuthService} from 'src/app/services/auth.service';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'auth-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, OnDestroy {
  userDetails: any = null;
  userAssessments: any = null;

  untilSubject$ = new Subject<void>();

  constructor(private authService: AuthService, private userService: UserService) {
  }

  ngOnInit() {
    this.authService
      .login('admin@deepersignals.com', 'password')
      .pipe(
        switchMap((userData) => {
          this.userDetails = userData;
          return this.userService.getUserAssessments();
        }),
        takeUntil(this.untilSubject$)
      )
      .subscribe(assessments => {
        console.log(assessments);
        this.userAssessments = assessments;
      });
  }

  ngOnDestroy() {
    this.untilSubject$.next();
    this.untilSubject$.complete();
  }

}
