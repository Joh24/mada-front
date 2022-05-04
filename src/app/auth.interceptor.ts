import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let token = localStorage.getItem("token");
  
    if (token) {
        request = request.clone({
           setHeaders: {
                Authorization: `Bearer ${token}`,
            }
        });
    }else{

      this.router.navigateByUrl('/connexion');

    }

    return next.handle(request);
  }
}
