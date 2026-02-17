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
import {EventDetailComponent} from './features/shared/event-detail-component/event-detail-component';
import {BookingComponent} from './features/user/booking-component/booking-component';
import {ViewBookingsComponent} from './features/user/view-bookings-component/view-bookings-component';
import {ProfileComponent} from './features/user/profile-component/profile-component';
import {PaymentProcessingComponent} from './features/user/payment-processing-component/payment-processing-component';
import {PaymentCancelComponent} from './features/user/payment-cancel-component/payment-cancel-component';
import {PaymentSuccessComponent} from './features/user/payment-success-component/payment-success-component';
import {TicketsComponent} from './features/user/tickets-component/tickets-component';

export const routes: Routes = [
  {
    path: '',
    component: UserLayout,
    canActivate: [authGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'event/:id', component: EventDetailComponent },
      { path: 'book/event/:id', component: BookingComponent },
      { path: 'bookings', component: ViewBookingsComponent },
      { path: 'profile', component: ProfileComponent},
      { path: 'payment/processing', component: PaymentProcessingComponent },
      { path: 'payment/success', component: PaymentSuccessComponent },
      { path: 'payment/cancel', component: PaymentCancelComponent },
      { path: 'tickets', component: TicketsComponent }
    ]
  },
  {
    path: 'auth',
    component: AuthLayout,
    canActivate: [noauthGuard],
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent }
    ]
  },
  {
    path: 'admin',
    component: AdminLayout,
    canActivate: [authGuard, adminGuard],
    children: [
      { path: '', component: AdminDashboard }
    ]
  },
  {
    path: 'host',
    component: HostLayout,
    canActivate: [authGuard, hostGuard],
    children: [
      { path: '', component: HostDashboard }
    ]
  }
];
