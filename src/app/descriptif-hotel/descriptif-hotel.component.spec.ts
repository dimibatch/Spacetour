import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptifHotelComponent } from './descriptif-hotel.component';

describe('DescriptifHotelComponent', () => {
  let component: DescriptifHotelComponent;
  let fixture: ComponentFixture<DescriptifHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptifHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptifHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
