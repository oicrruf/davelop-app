import { Routes } from '@angular/router';
import { IndexNineComponent } from './pages/index/index-nine/index-nine.component';
import { JobGridFourComponent } from './pages/job/job-grid-four/job-grid-four.component';
import { CandidateProfileComponent } from './pages/candidate/candidate-profile/candidate-profile.component';

// import { LoginComponent } from './pages/auth/login/login.component';
// import { SignupComponent } from './pages/auth/signup/signup.component';
// import { SignupSuccessComponent } from './pages/auth/signup-success/signup-success.component';
// import { ResetPasswordComponent } from './pages/auth/reset-password/reset-password.component';

export const routes: Routes = [
  { path: '', component: IndexNineComponent },
  { path: 'aplicacion/:id', component: CandidateProfileComponent },
  { path: 'aplicaciones', component: JobGridFourComponent },
  { path: 'candidate-profile/:id', component: CandidateProfileComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'signup', component: SignupComponent },
  // { path: 'signup-success', component: SignupSuccessComponent },
  // { path: 'reset-password', component: ResetPasswordComponent },
];
