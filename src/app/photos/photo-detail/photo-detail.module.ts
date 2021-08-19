import { ShowIfLoggedModule } from './../../shared/directives/show-if-logged/show-if-logged.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { PhotoModule } from './../photo/photo.module';
import { PhotoDetailComponent } from './photo-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VmessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';

@NgModule({
  imports: [
    CommonModule,
    PhotoModule,
    ReactiveFormsModule,
    RouterModule,
    VmessageModule,
    ShowIfLoggedModule
  ],
  declarations: [PhotoDetailComponent, PhotoCommentsComponent, PhotoOwnerOnlyDirective],
  exports: [PhotoDetailComponent, PhotoCommentsComponent]
})
export class PhotoDetailModule { }
