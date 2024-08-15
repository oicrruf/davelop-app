import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResultComponent } from './pages/result/result.component';
import { DetailComponent } from './pages/detail/detail.component';

// import { LoginComponent } from './pages/auth/login/login.component';
// import { SignupComponent } from './pages/auth/signup/signup.component';
// import { SignupSuccessComponent } from './pages/auth/signup-success/signup-success.component';
// import { ResetPasswordComponent } from './pages/auth/reset-password/reset-password.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aplicacion/:id', component: DetailComponent },
  { path: 'aplicaciones', component: ResultComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'signup', component: SignupComponent },
  // { path: 'signup-success', component: SignupSuccessComponent },
  // { path: 'reset-password', component: ResetPasswordComponent },
];
