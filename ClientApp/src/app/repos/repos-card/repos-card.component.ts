import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Repo } from 'src/app/interfaces/repo.model';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-repos-card',
  templateUrl: './repos-card.component.html',
  styleUrls: ['./repos-card.component.scss']
})
export class ReposCardComponent implements OnInit, OnChanges {
  @Input() repo: Repo;
  @Input() showBookmarkButton = false;
  repoBookmarked = false
  constructor(private sessionStorageService: SessionStorageService) { }

  ngOnInit() {
  }

  isObjectInStorage(repo: Repo) {
    // check if the repository already bookmarked
    const list = this.sessionStorageService.getBookmarkedItem('BookmarkedReposList');
    return this.sessionStorageService.isObjectInArray(list, repo)
  }

  saveRepo(repo: Repo) {
    // save the repository into bookmarked list
    this.sessionStorageService.setBookmarkedItem('BookmarkedReposList', repo);
    this.repoBookmarked = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    // check and set repo bookmarked
    const {
      repo,
    } = changes
    if (repo.currentValue) {
      this.repoBookmarked = this.isObjectInStorage(repo.currentValue);
    }
  }
}
