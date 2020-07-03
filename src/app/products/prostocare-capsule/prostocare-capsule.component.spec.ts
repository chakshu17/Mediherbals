import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProstocareCapsuleComponent } from './prostocare-capsule.component';

describe('ProstocareCapsuleComponent', () => {
  let component: ProstocareCapsuleComponent;
  let fixture: ComponentFixture<ProstocareCapsuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProstocareCapsuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProstocareCapsuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
