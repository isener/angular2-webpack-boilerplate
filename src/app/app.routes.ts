import { provideRouter, RouterConfig } from '@angular/router';

import {LoginComponent} from './components/login/login.component';
import {AdminComponent} from './components/admin/admin.component';
import {AuthService} from './services/auth.service.ts';
import {AuthGuard} from './guards/auth.guard.ts';

export const routes: RouterConfig = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  [AuthGuard, AuthService]
];

