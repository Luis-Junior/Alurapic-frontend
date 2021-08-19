import { ServerLogService } from './server-log.service';
import { UserService } from './../../core/user/user.service';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ErrorHandler, Injectable, Injector, Type } from '@angular/core';
import * as StackTrace from "stacktrace-js";
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(
    private injector: Injector
  ) { }

  handleError(error: any): void {
    console.log('handler de erro')
    const location = this.injector.get(LocationStrategy as Type<LocationStrategy>)
    const userService = this.injector.get(UserService as Type<UserService>)
    const serverLogService = this.injector.get(ServerLogService as Type<ServerLogService>)
    const router = this.injector.get(Router as Type<Router>)

    const url = location instanceof PathLocationStrategy ? location.path() : ''

    const message = error.message ? error.message : error.toString()

    router.navigate(['/error'])

    StackTrace.fromError(error)
      .then(stackFrames => {
        const stackAsString = stackFrames.map(sf => sf.toString()).join('\n');

        console.log(message)
        console.log(stackAsString)

        serverLogService.log(
          {
            message: message,
            url: url,
            stack: stackAsString,
            userName: userService.getUserName()
          }
        ).subscribe(
          ()=>console.log('Error logged on server'),
          erro => {
            console.log(erro)
            console.log('Fail to send error log to server')
          }
          )
      })
  }

}
