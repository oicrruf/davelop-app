import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index/index.component';
import { IndexTwoComponent } from './pages/index/index-two/index-two.component';
import { IndexThreeComponent } from './pages/index/index-three/index-three.component';
import { IndexFourComponent } from './pages/index/index-four/index-four.component';
import { IndexFiveComponent } from './pages/index/index-five/index-five.component';
import { IndexSixComponent } from './pages/index/index-six/index-six.component';
import { IndexSevenComponent } from './pages/index/index-seven/index-seven.component';
import { IndexEightComponent } from './pages/index/index-eight/index-eight.component';
import { IndexNineComponent } from './pages/index/index-nine/index-nine.component';
import { IndexTenComponent } from './pages/index/index-ten/index-ten.component';
import { JobCategoriesComponent } from './pages/job/job-categories/job-categories.component';
import { JobGridOneComponent } from './pages/job/job-grid-one/job-grid-one.component';
import { JobGridTwoComponent } from './pages/job/job-grid-two/job-grid-two.component';
import { JobGridThreeComponent } from './pages/job/job-grid-three/job-grid-three.component';
import { JobGridFourComponent } from './pages/job/job-grid-four/job-grid-four.component';
import { JobListOneComponent } from './pages/job/job-list-one/job-list-one.component';
import { JobListTwoComponent } from './pages/job/job-list-two/job-list-two.component';
import { JobListThreeComponent } from './pages/job/job-list-three/job-list-three.component';
import { JobListFourComponent } from './pages/job/job-list-four/job-list-four.component';
import { JobListFiveComponent } from './pages/job/job-list-five/job-list-five.component';
import { JobListSixComponent } from './pages/job/job-list-six/job-list-six.component';
import { JobDetailOneComponent } from './pages/job/job-detail-one/job-detail-one.component';
import { JobDetailTwoComponent } from './pages/job/job-detail-two/job-detail-two.component';
import { JobDetailThreeComponent } from './pages/job/job-detail-three/job-detail-three.component';
import { JobApplyComponent } from './pages/job/job-apply/job-apply.component';
import { JobPostComponent } from './pages/job/job-post/job-post.component';
import { CareerComponent } from './pages/job/career/career.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ServicesComponent } from './pages/services/services.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { EmployerListComponent } from './pages/employer/employer-list/employer-list.component';
import { EmployerProfileComponent } from './pages/employer/employer-profile/employer-profile.component';
import { CandidateListComponent } from './pages/candidate/candidate-list/candidate-list.component';
import { CandidateProfileComponent } from './pages/candidate/candidate-profile/candidate-profile.component';
import { CandidateProfileSettingComponent } from './pages/candidate/candidate-profile-setting/candidate-profile-setting.component';
import { HelpcenterOverviewComponent } from './pages/helpcenter/helpcenter-overview/helpcenter-overview.component';
import { HelpcenterFaqsComponent } from './pages/helpcenter/helpcenter-faqs/helpcenter-faqs.component';
import { GuidesComponent } from './pages/helpcenter/guides/guides.component';
import { HelpcenterSupportComponent } from './pages/helpcenter/helpcenter-support/helpcenter-support.component';
import { BlogsComponent } from './pages/blog/blogs/blogs.component';
import { BlogDetailComponent } from './pages/blog/blog-detail/blog-detail.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { SignupSuccessComponent } from './pages/auth/signup-success/signup-success.component';
import { ResetPasswordComponent } from './pages/auth/reset-password/reset-password.component';
import { LockScreenComponent } from './pages/auth/lock-screen/lock-screen.component';
import { TermsComponent } from './pages/utility/terms/terms.component';
import { PrivacyComponent } from './pages/utility/privacy/privacy.component';
import { ComingsoonComponent } from './pages/special/comingsoon/comingsoon.component';
import { MaintenanceComponent } from './pages/special/maintenance/maintenance.component';
import { ErrorComponent } from './pages/special/error/error.component';
import { ThankyouComponent } from './pages/special/thankyou/thankyou.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: IndexNineComponent },
  { path: 'aplicacion/:id', component: CandidateProfileComponent },
  { path: 'aplicaciones', component: JobGridFourComponent },

  // { path: 'index-two', component: IndexTwoComponent },
  // { path: 'index-three', component: IndexThreeComponent },
  // { path: 'index-four', component: IndexFourComponent },
  // { path: 'index-five', component: IndexFiveComponent },
  // { path: 'index-six', component: IndexSixComponent },
  // { path: 'index-seven', component: IndexSevenComponent },
  // { path: 'index-eight', component: IndexEightComponent },
  // { path: 'index-nine', component: IndexNineComponent },
  // { path: 'index-ten', component: IndexTenComponent },
  // { path: 'job-categories', component: JobCategoriesComponent },
  // { path: 'job-grid-one', component: JobGridOneComponent },
  // { path: 'job-grid-two', component: JobGridTwoComponent },
  // { path: 'job-grid-three', component: JobGridThreeComponent },
  // { path: 'job-list-one', component: JobListOneComponent },
  // { path: 'job-list-two', component: JobListTwoComponent },
  // { path: 'job-list-three', component: JobListThreeComponent },
  // { path: 'job-list-four', component: JobListFourComponent },
  // { path: 'job-list-five', component: JobListFiveComponent },
  // { path: 'job-list-six', component: JobListSixComponent },
  // { path: 'job-detail-one', component: JobDetailOneComponent },
  // { path: 'job-detail-one/:id', component: JobDetailOneComponent },
  // { path: 'job-detail-two', component: JobDetailTwoComponent },
  // { path: 'job-detail-two/:id', component: JobDetailTwoComponent },
  // { path: 'job-detail-three', component: JobDetailThreeComponent },
  // { path: 'job-detail-three/:id', component: JobDetailThreeComponent },
  // { path: 'job-apply', component: JobApplyComponent },
  // { path: 'job-post', component: JobPostComponent },
  // { path: 'career', component: CareerComponent },
  // { path: 'aboutus', component: AboutusComponent },
  // { path: 'services', component: ServicesComponent },
  // { path: 'pricing', component: PricingComponent },
  // { path: 'employer-list', component: EmployerListComponent },
  // { path: 'employer-profile', component: EmployerProfileComponent },
  // { path: 'employer-profile/:id', component: EmployerProfileComponent },
  // { path: 'candidate-list', component: CandidateListComponent },

  // { path: 'candidate-profile/:id', component: CandidateProfileComponent },
  // {
  //   path: 'candidate-profile-setting',
  //   component: CandidateProfileSettingComponent,
  // },
  // { path: 'helpcenter-overview', component: HelpcenterOverviewComponent },
  // { path: 'helpcenter-faqs', component: HelpcenterFaqsComponent },
  // { path: 'helpcenter-guides', component: GuidesComponent },
  // { path: 'helpcenter-support', component: HelpcenterSupportComponent },
  // { path: 'blogs', component: BlogsComponent },
  // { path: 'blog-detail', component: BlogDetailComponent },
  // { path: 'blog-detail/:id', component: BlogDetailComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'signup', component: SignupComponent },
  // { path: 'signup-success', component: SignupSuccessComponent },
  // { path: 'reset-password', component: ResetPasswordComponent },
  // { path: 'lock-screen', component: LockScreenComponent },
  // { path: 'terms', component: TermsComponent },
  // { path: 'privacy', component: PrivacyComponent },
  // { path: 'comingsoon', component: ComingsoonComponent },
  // { path: 'maintenance', component: MaintenanceComponent },
  // { path: 'error', component: ErrorComponent },
  // { path: 'thankyou', component: ThankyouComponent },
  // { path: 'contact', component: ContactComponent },
];
