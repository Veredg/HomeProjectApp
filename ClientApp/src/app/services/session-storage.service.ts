import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Repo } from '../interfaces/repo.model';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  private storage: Storage;
  public hasBookmarks$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public setIsBookmarksListEmpty(val: boolean) {
    this.hasBookmarks$.next(val);
  }
  constructor() {
    // check for bookmarks
    this.storage = localStorage;
    this.setIsBookmarksListEmpty(this.getBookmarkedItem('BookmarkedReposList').length > 0);
  }
  getBookmarkedItem(key: string): Repo[] {
    const item = this.storage.getItem(key);
    return item ? JSON.parse(item) : [];
  }

  setBookmarkedItem(key: string, value: Repo): void {
    const items = this.getBookmarkedItem(key);

    if (!this.isObjectInArray(items, value)) {
      items.push(value);
      this.storage.setItem(key, JSON.stringify(items));
    }
    this.setIsBookmarksListEmpty(this.getBookmarkedItem('BookmarkedReposList').length > 0);
  }

  removeBookmarkedItem(key: string): void {
    this.storage.removeItem(key);
    this.setIsBookmarksListEmpty(this.getBookmarkedItem('BookmarkedReposList').length > 0);
  }

  isObjectInArray(array: any[], obj: Repo): boolean {
    return array.some(item => this.areObjectsEqual(item, obj));
  }

  private areObjectsEqual(obj1: any, obj2: Repo): boolean {
    // Compare the objects based on your specific logic
    // For example, compare their IDs
    return obj1.id === obj2.id;
  }
}
