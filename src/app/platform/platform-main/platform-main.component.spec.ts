import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformMainComponent } from './platform-main.component';

describe('PlatformMainComponent', () => {
  let component: PlatformMainComponent;
  let fixture: ComponentFixture<PlatformMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
