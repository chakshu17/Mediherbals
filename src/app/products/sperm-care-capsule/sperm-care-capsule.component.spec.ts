import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpermCareCapsuleComponent } from './sperm-care-capsule.component';

describe('SpermCareCapsuleComponent', () => {
  let component: SpermCareCapsuleComponent;
  let fixture: ComponentFixture<SpermCareCapsuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpermCareCapsuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpermCareCapsuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
