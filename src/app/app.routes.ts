import { Routes } from '@angular/router';
import {AuthLayout} from './layouts/auth-layout/auth-layout';
import {UserLayout} from './layouts/user-layout/user-layout';
import {HomeComponent} from './features/user/home-component/home-component';
import {LoginComponent} from './features/auth/login-component/login-component';
import {SignupComponent} from './features/auth/signup-component/signup-component';
import {AdminLayout} from './layouts/admin-layout/admin-layout';
import {AdminDashboard} from './features/admin/admin-dashboard/admin-dashboard';
import {HostLayout} from './layouts/host-layout/host-layout';
import {HostDashboard} from './features/host/host-dashboard/host-dashboard';
import {authGuard} from './core/guards/auth-guard/auth-guard';
import {adminGuard} from './core/guards/auth-guard/admin-guard';
import {hostGuard} from './core/guards/auth-guard/host-guard';
import {noauthGuard} from './core/guards/not-authenticated/noauth-guard';

export const routes: Routes = [
  {
    path: '',
    component: UserLayout,
    canActivate: [authGuard],
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
    canActivate: [noauthGuard],
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
  {
    path: 'admin',
    component: AdminLayout,
    canActivate: [authGuard, adminGuard],
    children: [
      {
        path: '',
        component: AdminDashboard
      }
    ]
  },
  {
    path: 'host',
    component: HostLayout,
    canActivate: [authGuard, hostGuard],
    children: [
      {
        path: '',
        component: HostDashboard
      }
    ]
  }
];
