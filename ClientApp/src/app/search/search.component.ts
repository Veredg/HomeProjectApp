import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SessionStorageService } from '../services/session-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() searchText: string;
  @Output() inputChanged = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  inputDisabled(text: string) {
    // if input is empty or includes space only set the button disabled
    return !text || !text.replace(/\s/g, '').length
  }

  changed(text: string) {
    //emit changes to parent component
    this.inputChanged.emit(text);
  }

}
