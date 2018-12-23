import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService, UserCredentials } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private service: AuthService, private router: Router) {}
  email: string;
  password: string;
  ngOnInit(): void {}

  loginUser(): void {
    const credentials: UserCredentials = {
      email: this.email,
      password: this.password
    };

    this.service.login(credentials).subscribe(
      (data) => {
        if (data) {
          console.log('navigating!');
          localStorage.setItem('access_token', data['access_token']);
          // localStorage.setItem('refresh_token', data['auth']['refresh_token']);
          this.router.navigate(['/']);
        }
      },
      (errors) => console.log(errors)
    );
  }
}
