import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-bookmarked-repos-list',
  templateUrl: './bookmarked-repos-list.component.html',
  styleUrls: ['./bookmarked-repos-list.component.scss']
})
export class BookmarkedReposListComponent implements OnInit {
  BookmarkedReposList = [];
  constructor(private sessionStorageService: SessionStorageService) { }

  ngOnInit() {
    this.BookmarkedReposList = this.sessionStorageService.getBookmarkedItem('BookmarkedReposList');
  }

}
