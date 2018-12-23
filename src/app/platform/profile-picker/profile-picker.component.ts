import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-picker',
  templateUrl: './profile-picker.component.html',
  styleUrls: ['./profile-picker.component.scss']
})
export class ProfilePickerComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  routeToPrivateForm() {
    this.router.navigate(['/profiletype/private']);
  }

  routeToBusinessForm() {
    this.router.navigate(['/profiletype/business']);
  }
}
