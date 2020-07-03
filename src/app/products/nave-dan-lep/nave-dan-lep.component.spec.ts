import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaveDanLepComponent } from './nave-dan-lep.component';

describe('NaveDanLepComponent', () => {
  let component: NaveDanLepComponent;
  let fixture: ComponentFixture<NaveDanLepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaveDanLepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaveDanLepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
