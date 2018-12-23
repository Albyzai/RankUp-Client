import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, tap, map } from 'rxjs/operators';
import { throwError, pipe } from 'rxjs';

//  Import Models
import { IUserCredentials } from '../models/IUserCredentials';
import { UserCredentials } from '../models/UserCredentials';
import { User } from '../models/User';
export { User };

//  Export Models
export { UserCredentials };

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  private registerUrl = '/api/register';
  private loginUrl = '/api/login';
  private validateTokenUrl = '/api/validate';

  public login(credentials: UserCredentials) {
    return this.httpClient.post(this.loginUrl, credentials);
  }

  public register(credentials: UserCredentials) {
    return this.httpClient.post(this.registerUrl, credentials).pipe(
      map((user) => console.log(user)),
      catchError((errors: any) => throwError(new Error(JSON.stringify(errors))))
    );
    // .subscribe(
    //   (data) => this.setToken(data['auth']['access_token']),
    //   (error) => pipe(map(error))
    // );
  }

  public getAuthenticatedUser() {
    return this.httpClient.get<User>('/api/user');
  }

  public getToken(): string {
    return localStorage.getItem('access_token');
  }

  private setToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  // isAuthenticated(): boolean {
  //   const token = this.getToken();
  // }

  private mapToDto(credentials: UserCredentials): IUserCredentials {
    const dto: IUserCredentials = {
      email: credentials.email,
      password: credentials.password
    };

    return dto;
  }

  mapToInterface(type: any) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }

    return throwError('Something bad happened; please try again later.');
  }
}
