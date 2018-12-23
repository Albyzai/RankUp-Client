import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './auth/landing/landing.component';
import { LoginComponent } from './auth/login/login.component';
import { LoginGuard } from './login.guard';
import { ProfilePickerComponent } from './platform/profile-picker/profile-picker.component';
import { PrivateFormComponent } from './platform/private-form/private-form.component';
import { BusinessFormComponent } from './platform/business-form/business-form.component';
import { PlatformMainComponent } from './platform/platform-main/platform-main.component';

const routes: Routes = [
  { path: 'login', component: LandingComponent, canActivate: [LoginGuard] },
  {
    path: 'test',
    component: ProfilePickerComponent,
    canActivate: [LoginGuard]
  },
  {
    path: '',
    component: PlatformMainComponent,
    children: [
      {
        path: 'profiletype',
        component: ProfilePickerComponent
      },
      {
        path: 'profiletype/private',
        component: PrivateFormComponent
      },
      {
        path: 'profiletype/business',
        component: BusinessFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
