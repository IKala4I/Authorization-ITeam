import {Component, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';
import {Subject, takeUntil} from 'rxjs';
import {ROLES} from 'src/app/constants/roles';

@Component({
  selector: 'auth-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnDestroy {

  untilSubject$ = new Subject<void>();

  constructor(private router: Router, private authService: AuthService) {
  }

  login(role: string) {
    let email;
    const password = 'password';

    if (role === ROLES.ADMIN)
      email = 'admin@deepersignals.com';
    else
      email = 'user@deepersignals.com';

    this.authService
      .login(email, password)
      .pipe(
        takeUntil(this.untilSubject$)
      )
      .subscribe(() => {
        this.router.navigate(['/dashboard']);
      });
  }

  ngOnDestroy() {
    this.untilSubject$.next();
    this.untilSubject$.complete();
  }
}
