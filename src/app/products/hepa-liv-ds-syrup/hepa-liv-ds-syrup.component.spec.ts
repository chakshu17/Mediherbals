import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HepaLivDsSyrupComponent } from './hepa-liv-ds-syrup.component';

describe('HepaLivDsSyrupComponent', () => {
  let component: HepaLivDsSyrupComponent;
  let fixture: ComponentFixture<HepaLivDsSyrupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HepaLivDsSyrupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HepaLivDsSyrupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
