import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireMobileComponent } from './formulaire-mobile.component';

describe('FormulaireMobileComponent', () => {
  let component: FormulaireMobileComponent;
  let fixture: ComponentFixture<FormulaireMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
