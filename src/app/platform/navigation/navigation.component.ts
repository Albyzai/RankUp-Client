import { Component, OnInit } from '@angular/core';
import { AuthService, User } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
    constructor(private authService: AuthService, private router: Router) {}
    authUser: User = null;
    isAuthenticated: boolean = false;

    ngOnInit() {
        this.authService.getUser().subscribe(user => {
            this.authUser = user;
        });
    }

    logoutUser() {
        this.authService.logout().subscribe(x => {
            console.log('User logged out');
            this.router.navigate(['/login']);
        });
    }
}
