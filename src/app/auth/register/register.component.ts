import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService, UserCredentials } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    constructor(private service: AuthService, private router: Router) {}
    email: string;
    password: string;
    agreedToTerms: boolean = false;
    ngOnInit(): void {}
    registerForm: FormGroup;

    registerUser(): void {
        const credentials: UserCredentials = {
            email: this.email,
            password: this.password,
        };

        this.service.register(credentials).subscribe(data => {
            this.router.navigate(['/']);
        });
    }

    // registerUser(): void {
    //   // let credentials: UserCredentials;
    //   // credentials.email = this.email;
    //   // credentials.password = this.password;

    //   const credentials: UserCredentials = {
    //     email: this.email,
    //     password: this.password
    //   };

    //   this.service.register(credentials).subscribe(
    //     (data) => {
    //       if (data) {
    //         localStorage.setItem('access_token', data['auth']['access_token']);
    //         localStorage.setItem('refresh_token', data['auth']['refresh_token']);
    //         this.router.navigate(['/']);
    //       }
    //     },
    //     (errors) => console.log(errors)
    //   );
    // }
}
