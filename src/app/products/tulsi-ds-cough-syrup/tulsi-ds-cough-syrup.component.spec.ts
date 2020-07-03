import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TulsiDsCoughSyrupComponent } from './tulsi-ds-cough-syrup.component';

describe('TulsiDsCoughSyrupComponent', () => {
  let component: TulsiDsCoughSyrupComponent;
  let fixture: ComponentFixture<TulsiDsCoughSyrupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TulsiDsCoughSyrupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TulsiDsCoughSyrupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
