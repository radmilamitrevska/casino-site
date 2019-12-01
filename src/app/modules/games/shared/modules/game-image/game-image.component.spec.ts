import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameImageComponent } from './game-image.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('GameImageComponent', () => {
  let component: GameImageComponent;
  let fixture: ComponentFixture<GameImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameImageComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
