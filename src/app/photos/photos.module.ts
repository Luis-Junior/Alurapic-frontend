import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { PhotoDetailModule } from './photo-detail/photo-detail.module';

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      PhotoModule,
      PhotoFormModule,
      PhotoListModule,
      PhotoDetailModule
     ]
})
export class PhotosModule {}
