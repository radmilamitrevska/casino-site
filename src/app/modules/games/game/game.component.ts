import {Component, Input} from '@angular/core';
import {GameInterface} from '../shared/models/game/game.interface';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  @Input() game: GameInterface;
}
