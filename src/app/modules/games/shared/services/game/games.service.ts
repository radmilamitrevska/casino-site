import { Injectable } from '@angular/core';
import {GameInterface} from '../../models/game/game.interface';
import {jsonData} from './data/data';

@Injectable()
export class GamesService {
  private _allGames: GameInterface[] = jsonData as GameInterface[];

  get allGames(): GameInterface[] {
    return this._allGames;
  }

  searchGames(searchValue: string) {
    return this._allGames.filter((game: GameInterface) => {
      const regex = new RegExp(searchValue, 'g');
      return Boolean(game.name.toLowerCase().match(regex));
    });
  }
}
