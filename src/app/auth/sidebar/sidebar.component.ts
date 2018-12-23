import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  private _opened: boolean = true;

  constructor() {}

  ngOnInit() {}

  private _toggleOpened(): void {
    this._opened = !this._opened;
  }
}
