import { Routes } from '@angular/router';
import {AuthLayout} from './layouts/auth-layout/auth-layout';
import {UserLayout} from './layouts/user-layout/user-layout';
import {HomeComponent} from './features/user/home-component/home-component';
import {LoginComponent} from './features/auth/login-component/login-component';
import {SignupComponent} from './features/auth/signup-component/signup-component';

export const routes: Routes = [
  {
    path: '',
    component: UserLayout,
    children: [
      {
        path: '',
        component: HomeComponent
      }
      // Rest of the user layout oath goes in here.
    ]
  },
  {
    path: 'auth',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      }
    ]
  },
];
