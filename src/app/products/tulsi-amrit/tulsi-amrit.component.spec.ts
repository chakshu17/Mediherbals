import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TulsiAmritComponent } from './tulsi-amrit.component';

describe('TulsiAmritComponent', () => {
  let component: TulsiAmritComponent;
  let fixture: ComponentFixture<TulsiAmritComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TulsiAmritComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TulsiAmritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
