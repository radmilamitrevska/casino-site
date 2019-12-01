import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GameComponent } from './game.component';
import {By} from '@angular/platform-browser';
import {GameImageModule} from '../shared/modules/game-image/game-image.module';
import {GameImageComponent} from '../shared/modules/game-image/game-image.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GameImageModule],
      declarations: [GameComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    component.game = gameJson;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('game has value and image', () => {
    const name = fixture.debugElement.query(By.css('.game-name'));
    const image: GameImageComponent = fixture.debugElement.query(By.css('.game-image')).componentInstance;
    expect(name.nativeElement.textContent.trim()).toBe(gameJson.name.trim());
    expect(image.imageUrl).toBe(gameJson.background);
  });

  const gameJson = {
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
    };
});
