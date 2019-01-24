import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';

import { catchError, tap, map } from 'rxjs/operators';
import { throwError, pipe } from 'rxjs';

//  Import Models
import { IUserCredentials } from '../models/IUserCredentials';
import { UserCredentials } from '../models/UserCredentials';
import { User } from '../models/User';
import { JWT } from '../models/JWT';
export { User };

//  Export Models
export { UserCredentials };
export const TOKEN_NAME: string = 'jwt_token';
export let jwtToken = {};

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private httpClient: HttpClient) {}

    private registerUrl = '/api/auth/register';
    private loginUrl = '/api/auth/login';
    private logoutUrl = '/api/auth/logout';
    private validateTokenUrl = '/api/auth/validate';
    private meUrl = '/api/auth/me';

    public login(credentials: UserCredentials) {
        return this.httpClient
            .post<JWT>(this.loginUrl, credentials)
            .pipe(tap(token => this.setToken(token.token_type, token.access_token)));
    }

    public logout() {
        return this.httpClient.post(this.logoutUrl, {}).pipe(tap(x => this.removeToken()));
    }

    public register(credentials: UserCredentials) {
        return this.httpClient
            .post<JWT>(this.registerUrl, credentials)
            .pipe(tap(token => this.setToken(token.token_type, token.access_token)));
        // .subscribe(
        //   (data) => this.setToken(data['auth']['access_token']),
        //   (error) => pipe(map(error))
        // );
    }

    public getAuthenticatedUser() {
        return this.httpClient.get<User>('/api/user');
    }

    public getToken(): string {
        return localStorage.getItem(TOKEN_NAME);
    }

    public setToken(type: string, accessToken: string): void {
        localStorage.setItem(TOKEN_NAME, type + ' ' + accessToken);
    }

    public removeToken(): void {
        localStorage.removeItem(TOKEN_NAME);
    }

    getTokenExpirationDate(token: string): Date {
        const decoded = jwt_decode(token);

        if (decoded.exp === void 0) return null;

        const date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    }

    public getUser() {
        return this.httpClient.post<User>(this.meUrl, {});
    }

    public isTokenExpired(token?: string): boolean {
        if (!token) token = this.getToken();
        if (!token) return true;

        const date = this.getTokenExpirationDate(token);
        if (date === void 0) return false;
        return !(date.valueOf() > new Date().valueOf());
    }

    public isLoggedIn(): boolean {
        return localStorage.getItem(TOKEN_NAME) !== null;
    }

    // isAuthenticated(): boolean {
    //   const token = this.getToken();
    // }

    private mapToDto(credentials: UserCredentials): IUserCredentials {
        const dto: IUserCredentials = {
            email: credentials.email,
            password: credentials.password,
        };

        return dto;
    }

    mapToInterface(type: any) {}

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }

        return throwError('Something bad happened; please try again later.');
    }
}
