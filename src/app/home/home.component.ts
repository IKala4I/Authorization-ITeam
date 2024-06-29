import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'auth-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router:Router) {
  }

  handleClick(){
    this.router.navigate(['/dashboard']);
  }
}
