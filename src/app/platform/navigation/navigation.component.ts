import { Component, OnInit } from '@angular/core';
import { AuthService, User } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  constructor(private authService: AuthService) {}
  authUser: User = null;
  isAuthenticated: boolean = false;

  ngOnInit() {
    this.authService.getAuthenticatedUser().subscribe((user) => {
      this.authUser = user;
    });
  }
}
