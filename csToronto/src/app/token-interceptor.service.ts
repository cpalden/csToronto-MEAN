import { Injectable, Injector } from '@angular/core';
// import { HttpInterceptor} from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private _injector: Injector) { }

  intercept(req, next) {
    // instance of authService
    const _authService = this._injector.get(AuthService);
    const tokenizedReq = req.clone({
      setHeaders: {
        // es6 syntax to directly embed the value of token as part of this string
        //  Authorization: `Bearer ${_authService.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }

}
