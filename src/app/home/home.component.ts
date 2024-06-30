import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';
import {ROLES} from 'src/app/constants/roles';
import {MatFabButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'auth-home',
  standalone: true,
  imports: [
    MatFabButton,
    MatIcon,
    MatProgressSpinner
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  isLoginClicked = false;

  constructor(private router: Router, private authService: AuthService) {
  }

  login(role: string) {
    this.isLoginClicked = true;

    let email;
    const password = 'password';

    if (role === ROLES.ADMIN)
      email = 'admin@deepersignals.com';
    else
      email = 'user@deepersignals.com';

    this.authService
      .login(email, password)
      .subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
        },
        error: error => {
          console.error(error);
        },
        complete: () => {
          this.isLoginClicked = false;
        }
      });
  }
}
