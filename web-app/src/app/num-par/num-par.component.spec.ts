import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumParComponent } from './num-par.component';

describe('NumParComponent', () => {
  let component: NumParComponent;
  let fixture: ComponentFixture<NumParComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumParComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
