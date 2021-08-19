import { PhotoDetailComponent } from './photos/photo-detail/photo-detail.component';
import { RequiresAutenticationGuard } from './core/auth/requires-autentication.guard';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { SignupComponent } from './home/signup/signup.component';
import { GlobalErrorComponent } from './errors/global-error/global-error.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren:'./home/home.module#HomeModule'
  },
  {
    path: 'user/:username',
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver
    },
    data: {
      title: 'Timeline'
    }
  },
  {
    path: 'p/add',
    component: PhotoFormComponent,
    canActivate: [RequiresAutenticationGuard],
    data: {
      title: 'Photo Upload'
    }
  },
  {
    path: 'p/:photoId',
    component: PhotoDetailComponent,
    data: {
      title: 'Photo Detail'
    }
  },
  {
    path: 'error',
    component: GlobalErrorComponent,
    data: {
      title: 'error'
    }
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: {
      title: 'not-found'
    }
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
