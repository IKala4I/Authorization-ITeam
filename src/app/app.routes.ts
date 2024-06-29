import {Routes} from '@angular/router';
import {HomeComponent} from 'src/app/home/home.component';
import {DashboardComponent} from 'src/app/dashboard/dashboard.component';
import {UsersComponent} from 'src/app/dashboard/users/users.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }
];
