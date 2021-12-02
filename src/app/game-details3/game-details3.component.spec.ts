import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDetails3Component } from './game-details3.component';

describe('GameDetails3Component', () => {
  let component: GameDetails3Component;
  let fixture: ComponentFixture<GameDetails3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameDetails3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDetails3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
