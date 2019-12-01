import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appGameImageFallback]',
})
export class GameImageFallbackDirective {
  @HostBinding('attr.src')
  @Input() src: string;
  @Input() defaultImage: string;
  @HostListener('error') updateUrl() {
    this.src = this.defaultImage;
  }
}
