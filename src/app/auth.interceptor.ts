import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { jwtToken } from './auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('AuthInterceptor before return');
        return next.handle(request).pipe(
            tap(
                () => {},
                (e: any) => {
                    console.log('interceptor token: ', jwtToken);
                    if (e instanceof HttpErrorResponse) {
                        if (e.status === 401 || e.status === 400 || e.status === 0) {
                            this.router.navigate(['/login']);
                            console.log('AuthInterceptor redirected to login');
                        }
                    }
                },
                () => {},
            ),
        );
    }
}
