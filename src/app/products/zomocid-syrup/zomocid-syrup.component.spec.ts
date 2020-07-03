import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZomocidSyrupComponent } from './zomocid-syrup.component';

describe('ZomocidSyrupComponent', () => {
  let component: ZomocidSyrupComponent;
  let fixture: ComponentFixture<ZomocidSyrupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZomocidSyrupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZomocidSyrupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
