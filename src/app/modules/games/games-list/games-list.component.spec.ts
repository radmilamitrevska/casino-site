import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GamesListComponent } from './games-list.component';
import {By} from '@angular/platform-browser';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('GamesListComponent', () => {
  let component: GamesListComponent;
  let fixture: ComponentFixture<GamesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GamesListComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesListComponent);
    component = fixture.componentInstance;
    component.games = gamesJson;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show 3 games', () => {
    fixture.detectChanges();
    const viewGames = fixture.debugElement.queryAll(By.css('app-game'));
    expect(viewGames.length).toBe(3);
  });
});

const gamesJson = [
  {
    'categories': [
      '51'
    ],
    'features': [],
    'themes': [],
    'icons': [],
    'backgrounds': [],
    'id': '2984',
    'server_game_id': '205',
    'extearnal_game_id': '3041',
    'front_game_id': 'ASG205',
    'name': 'WolfsBet ',
    'title': null,
    'ratio': '4:3',
    'status': 'published',
    'provider': 'ASG',
    'show_as_provider': 'VGS',
    'provider_title': 'BETCONSTRUCT',
    'game_options': null,
    'blocked_countries': null,
    'has_age_restriction': 0,
    'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ASG205.jpg',
    'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/2219ae1d06d31cb180a7b9cf13a322d7_background.jpeg',
    'types': {
      'realMode': 1,
      'funMode': 1
    },
    'game_skin_id': '5015628',
    'cats': [
      {
        'id': '51',
        'title': 'Video Slots',
        'type': 'category'
      }
    ],
    'feats': [],
    'thms': [],
    'active': '1'
  },
  {
    'categories': [
      '93'
    ],
    'features': [],
    'themes': [],
    'icons': [],
    'backgrounds': [],
    'id': '2982',
    'server_game_id': '204',
    'extearnal_game_id': '3047',
    'front_game_id': 'ASG204',
    'name': 'Viking Treasures',
    'title': null,
    'ratio': '16:9',
    'status': 'published',
    'provider': 'ASG',
    'show_as_provider': 'VGS',
    'provider_title': 'BETCONSTRUCT',
    'game_options': null,
    'blocked_countries': null,
    'has_age_restriction': 0,
    'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/ASG204.jpg',
    'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/f09b721146743c153c4bcefac2e7949f_background.jpeg',
    'types': {
      'realMode': 1,
      'funMode': 1
    },
    'game_skin_id': '5015630',
    'cats': [
      {
        'id': '93',
        'title': 'Top Slots',
        'type': 'category'
      }
    ],
    'feats': [],
    'thms': [],
    'active': '1'
  },
  {
    'categories': [
      '51'
    ],
    'features': [],
    'themes': [],
    'icons': [],
    'backgrounds': [],
    'id': '4172',
    'server_game_id': '208',
    'extearnal_game_id': '3049',
    'front_game_id': 'ASG208',
    'name': 'Under Water',
    'title': null,
    'ratio': '16:9',
    'status': 'published',
    'provider': 'ASG',
    'show_as_provider': 'VGS',
    'provider_title': 'BETCONSTRUCT',
    'game_options': null,
    'blocked_countries': null,
    'has_age_restriction': 0,
    'icon_2': 'https://www.cmsbetconstruct.com/content/images/casino/icon2/b7f060a6e0c289a437bfa4daa0f17086_casinoGameIcon2.jpeg',
    'background': 'https://www.cmsbetconstruct.com/content/images/casino/background/0a65627dac4e909cc24300994d7fe10d_background.jpeg',
    'types': {
      'realMode': 1,
      'funMode': 1
    },
    'game_skin_id': '5015632',
    'cats': [
      {
        'id': '51',
        'title': 'Video Slots',
        'type': 'category'
      }
    ],
    'feats': [],
    'thms': [],
    'active': '1'
  },
];
