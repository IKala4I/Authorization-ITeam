import {Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'auth-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy{
  userDetails:any = null;

  untilSubject$ = new Subject<void>();

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.login().
      pipe(takeUntil(this.untilSubject$)).
      subscribe(auth => {
      console.log(auth);
      this.userDetails = auth;
    })
  }

  ngOnDestroy() {
    this.untilSubject$.next();
    this.untilSubject$.complete();
  }
}
