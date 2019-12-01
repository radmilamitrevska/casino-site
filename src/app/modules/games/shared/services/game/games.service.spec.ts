import { TestBed } from '@angular/core/testing';

import { GamesService } from './games.service';

describe('GamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GamesService]
    });
  });

  it('should be created', () => {
    const service: GamesService = TestBed.get(GamesService);
    expect(service).toBeTruthy();
  });

  describe('method #searchGames', () => {
    it('test search query match', () => {
      const service: GamesService = TestBed.get(GamesService);
      (service as any)._allGames = gamesJson;
      const results = service.searchGames('wol');

      expect(results.length).toBe(1);
      expect(results[0].name).toBe('WolfsBet ');
    });
  });

});

const gamesJson = [
  {
    name: 'WolfsBet ',
  },
  {
    name: 'FoxBet ',
  },
  {
    name: 'BearBet ',
  },
];
