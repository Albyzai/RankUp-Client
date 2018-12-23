import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  private _opened: boolean = true;
  constructor() {}

  ngOnInit() {}

  private _toggleSidebar(): void {
    this._opened = !this._opened;
  }
}
