import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-game-image',
  templateUrl: './game-image.component.html',
  styleUrls: ['./game-image.component.scss']
})
export class GameImageComponent {
  @Input() imageAlt: string;
  readonly imageFallback: string = 'assets/images/default-img.jpeg';
  private _imageUrl;
  @Input() set imageUrl(value) {
    if (!value) {
      return;
    }
    this._imageUrl = value;
  }

  get imageUrl() {
    return this._imageUrl;
  }
}
