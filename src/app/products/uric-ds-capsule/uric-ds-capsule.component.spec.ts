import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UricDsCapsuleComponent } from './uric-ds-capsule.component';

describe('UricDsCapsuleComponent', () => {
  let component: UricDsCapsuleComponent;
  let fixture: ComponentFixture<UricDsCapsuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UricDsCapsuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UricDsCapsuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
