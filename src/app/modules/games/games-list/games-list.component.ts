import {Component, Input} from '@angular/core';
import {GameInterface} from '../shared/models/game/game.interface';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent {
  @Input() games: GameInterface[];
}
