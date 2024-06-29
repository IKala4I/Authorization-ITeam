import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {UserService} from 'src/app/services/user.service';
import {AssessmentListComponent} from 'src/app/dashboard/assessment-list/assessment-list.component';
import {Router} from '@angular/router';
import {RoleService} from 'src/app/services/role.service';
import {ROLES} from 'src/app/constants/roles';

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
  userAssessments: any = null;

  untilSubject$ = new Subject<void>();

  constructor(private userService: UserService, private roleService: RoleService, private router: Router) {
  }

  ngOnInit() {
    this.userService
      .getUserAssessments()
      .pipe(
        takeUntil(this.untilSubject$)
      )
      .subscribe(assessments => {
        this.userAssessments = assessments;
      });
  }

  showUsers() {
    this.router.navigate(['/users']);
  }

  isAdmin() {
    return this.roleService.hasRole(ROLES.ADMIN);
  }

  ngOnDestroy() {
    this.untilSubject$.next();
    this.untilSubject$.complete();
  }
}
