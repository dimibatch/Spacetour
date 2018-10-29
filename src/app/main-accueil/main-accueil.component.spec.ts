import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAccueilComponent } from './main-accueil.component';

describe('MainAccueilComponent', () => {
  let component: MainAccueilComponent;
  let fixture: ComponentFixture<MainAccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
