import { Component, OnInit } from '@angular/core';
import { RepoService } from '../services/repo.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SessionStorageService } from '../services/session-storage.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor(private repoService: RepoService, private router: Router,
    public sessionStorageService: SessionStorageService, public searchService: SearchService) { }
  result$: Observable<any>;

  ngOnInit() {
    // request api if serch text exists to recover previous search results
    if (this.searchService.searchText) {
      this.getRepos(this.searchService.searchText);
    }
  }
  getRepos(searchText: string) {
    // save searchText into SerchService for later use
    this.searchService.searchText = searchText;
    // send request to get the repositories by search text
    this.result$ = this.repoService.getRepositories(searchText);

  }
  goToBookmarks() {
    // go to bookmarks page
    window.scrollTo(0, 0);
    this.router.navigate(['my-bookmarks']);
  }

}
