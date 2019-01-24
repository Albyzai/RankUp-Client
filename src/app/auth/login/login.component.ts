import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as jwt_decode from 'jwt-decode';
import { AuthService, UserCredentials, jwtToken } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor(private service: AuthService, private router: Router) {}
    email: string;
    password: string;
    ngOnInit(): void {}

    loginUser(): void {
        const credentials: UserCredentials = {
            email: this.email,
            password: this.password,
        };

        this.service.login(credentials).subscribe(data => {
            this.router.navigate(['/']);
        });

        // this.service.login(credentials).subscribe(data => {
        //     if (data) console.log('Data: ' + JSON.stringify(data));
        //     console.log('AuthenticatedUser: ' + JSON.stringify(jwt_decode(jwtToken)));
        // });

        // this.service.login(credentials).subscribe(
        //   (data) => {
        //     if (data) {
        //       console.log('navigating!');
        //       localStorage.setItem(
        //         'token',
        //         data['token_type'] + ' ' + data['access_token']
        //       );
        //       this.router.navigate(['/']);
        //     }
        //   },
        //   (errors) => console.log(errors)
        // );
    }
}
