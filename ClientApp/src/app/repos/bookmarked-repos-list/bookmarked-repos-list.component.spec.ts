import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkedReposListComponent } from './bookmarked-repos-list.component';

describe('BookmarkedReposListComponent', () => {
  let component: BookmarkedReposListComponent;
  let fixture: ComponentFixture<BookmarkedReposListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkedReposListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkedReposListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
