import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MRonSyrupComponent } from './m-ron-syrup.component';

describe('MRonSyrupComponent', () => {
  let component: MRonSyrupComponent;
  let fixture: ComponentFixture<MRonSyrupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MRonSyrupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MRonSyrupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
