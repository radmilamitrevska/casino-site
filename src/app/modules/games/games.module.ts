import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesListComponent } from './games-list/games-list.component';
import { GameComponent } from './game/game.component';
import { SearchComponent } from './search/search.component';
import {GamesComponent} from './games.component';
import {GameImageModule} from './shared/modules/game-image/game-image.module';
import {GamesService} from './shared/services/game/games.service';

@NgModule({
  declarations: [
    GamesComponent,
    GamesListComponent,
    GameComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    GameImageModule
  ],
  providers: [GamesService],
  exports: [GamesComponent]
})
export class GamesModule { }
