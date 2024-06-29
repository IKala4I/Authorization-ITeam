import {Routes} from '@angular/router';
import {HomeComponent} from 'src/app/home/home.component';
import {DashboardComponent} from 'src/app/dashboard/dashboard.component';
import {UsersComponent} from 'src/app/dashboard/users/users.component';
import {roleGuard} from 'src/app/guards/role.guard';
import {ROLES} from 'src/app/constants/roles';
import {UnauthorizedComponent} from 'src/app/unauthorized/unauthorized.component';

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
    component: UsersComponent,
    canActivate: [roleGuard],
    data: {requiredRole: ROLES.ADMIN}
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
  }
];
