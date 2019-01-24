import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { AuthService, TOKEN_NAME } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(public authService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token;

        if ((token = this.authService.getToken())) {
            request = request.clone({
                setHeaders: {
                    Authorization: token,
                },
            });
        }

        return next.handle(request);
        // if (this.auth.getToken() != null) {
        //     console.log('tokenn not null');
        //     request = request.clone({
        //         setHeaders: {
        //             Authorization: this.auth.getToken(),
        //         },
        //     });
        // }
        // console.log('TokenInterceptor token: ' + this.auth.getToken());
        // return next.handle(request);
    }
}
