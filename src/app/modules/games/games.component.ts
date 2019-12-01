import { Component, OnInit } from '@angular/core';
import {GameInterface} from './shared/models/game/game.interface';
import {GamesService} from './shared/services/game/games.service';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  games: GameInterface[];

  constructor(public gamesService: GamesService) { }

  ngOnInit() {
    this.games = this.gamesService.allGames;
  }

  searchGames($event: string) {
    if (!$event) {
      this.games = this.gamesService.allGames;
      return;
    }

    this.games = this.gamesService.searchGames($event);
  }
}
