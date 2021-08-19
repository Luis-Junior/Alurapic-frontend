import { SignupService } from './signup/signup.service';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    VmessageModule,
    RouterModule,
  ],
  declarations: [SigninComponent, SignupComponent, SignupComponent, HomeComponent],
  providers: [SignupService]
})
export class HomeModule { }
