import { MenuModule } from './../shared/components/menu/menu.module';
import { AlertModule } from './../shared/components/alert/alert.module';
import { RequestInterceptor } from './auth/request.interceptor';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingModule } from '../shared/components/loading/loading.module';
import { ShowIfLoggedModule } from '../shared/directives/show-if-logged/show-if-logged.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports:[
    CommonModule,
    RouterModule,
    AlertModule,
    LoadingModule,
    MenuModule,
    ShowIfLoggedModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
