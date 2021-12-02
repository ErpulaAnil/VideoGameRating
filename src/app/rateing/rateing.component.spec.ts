import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateingComponent } from './rateing.component';

describe('RateingComponent', () => {
  let component: RateingComponent;
  let fixture: ComponentFixture<RateingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
