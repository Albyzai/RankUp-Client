import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePickerComponent } from './profile-picker/profile-picker.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule } from '../material.module';
import { PrivateFormComponent } from './private-form/private-form.component';
import { BusinessFormComponent } from './business-form/business-form.component';
import { PlatformMainComponent } from './platform-main/platform-main.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    ProfilePickerComponent,
    NavigationComponent,
    PrivateFormComponent,
    BusinessFormComponent,
    PlatformMainComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    MaterialModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class PlatformModule {}
