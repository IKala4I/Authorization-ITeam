import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, switchMap, takeUntil} from 'rxjs';
import {AuthService} from 'src/app/services/auth.service';
import {UserService} from 'src/app/services/user.service';
import {AssessmentListComponent} from 'src/app/dashboard/assessment-list/assessment-list.component';
import {Router} from '@angular/router';

@Component({
  selector: 'auth-dashboard',
  standalone: true,
  imports: [
    AssessmentListComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, OnDestroy {
  userDetails: any = null;
  userAssessments: any = null;

  untilSubject$ = new Subject<void>();

  constructor(private authService: AuthService, private userService: UserService, private router: Router) {
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
        this.userAssessments = assessments;
      });
  }

  showUsers() {
    this.router.navigate(['/users']);
  }

  ngOnDestroy() {
    this.untilSubject$.next();
    this.untilSubject$.complete();
  }

}
