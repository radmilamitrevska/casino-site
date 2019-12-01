import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() searchValue = new EventEmitter<string>();

  search(value) {
    this.searchValue.emit(value.target.value);
  }

}
