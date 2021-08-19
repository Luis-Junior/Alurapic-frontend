import { ImmediateClickModule } from './../../shared/directives/immediate-click/immediate-click.module';
import { PhotoModule } from './../photo/photo.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';
import { VmessageModule } from 'src/app/shared/components/vmessage/vmessage.module';

@NgModule({
  declarations: [
    PhotoFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    RouterModule,
    PhotoModule,
    ImmediateClickModule
  ],
  exports: []
})
export class PhotoFormModule {

}
