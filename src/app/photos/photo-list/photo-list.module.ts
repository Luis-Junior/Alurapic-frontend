import { RouterModule } from '@angular/router';
import { DarkenOnHoverModule } from './../../shared/directives/darken-on-hover/darken-on-hover.module';
import { SearchComponent } from './search/search.component';
import { CardModule } from './../../shared/components/card/card.module';
import { PhotoModule } from './../photo/photo.module';
import { PhotosComponent } from './photos/photos.component';
import { PhotoListComponent } from './photo-list.component';
import { NgModule } from '@angular/core';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescription } from './filter-by-description.pipe.ts.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescription,
    SearchComponent
  ],
  imports: [
    CommonModule,
    PhotoModule,
    CardModule,
    DarkenOnHoverModule,
    RouterModule
  ],
  exports: []
})
export class PhotoListModule {

}
