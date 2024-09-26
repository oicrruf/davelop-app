import { Routes } from '@angular/router';
import { searchGuard } from './search.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { UploadComponent } from './pages/upload/upload.component';

// import { SignupComponent } from './pages/auth/signup/signup.component';
// import { SignupSuccessComponent } from './pages/auth/signup-success/signup-success.component';
// import { ResetPasswordComponent } from './pages/auth/reset-password/reset-password.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'aplicaciones',
    loadComponent: () =>
      import('./pages/result/result.component').then((m) => m.ResultComponent),
    canActivate: [searchGuard],
  },
  {
    path: 'aplicacion/:id',
    loadComponent: () =>
      import('./pages/detail/detail.component').then((m) => m.DetailComponent),
    canActivate: [searchGuard],
  },
  { path: 'upload', component: UploadComponent },

  // { path: 'signup', component: SignupComponent },
  // { path: 'signup-success', component: SignupSuccessComponent },
  // { path: 'reset-password', component: ResetPasswordComponent },
];
