import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesComponent } from './games.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {GamesService} from './shared/services/game/games.service';

describe('GamesComponent', () => {
  let component: GamesComponent;
  let fixture: ComponentFixture<GamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [GamesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
