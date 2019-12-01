import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameImageComponent } from './game-image.component';
import { GameImageFallbackDirective } from './shared/directives/game-image-fallback.directive';

@NgModule({
  declarations: [GameImageComponent, GameImageFallbackDirective],
  imports: [
    CommonModule
  ],
  exports: [GameImageComponent]
})
export class GameImageModule { }
