import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboueComponent } from './aboue.component';

describe('AboueComponent', () => {
  let component: AboueComponent;
  let fixture: ComponentFixture<AboueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
