import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeverticSyrupComponent } from './fevertic-syrup.component';

describe('FeverticSyrupComponent', () => {
  let component: FeverticSyrupComponent;
  let fixture: ComponentFixture<FeverticSyrupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeverticSyrupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeverticSyrupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
