import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinnerService } from 'src/app/services/spinner.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Repo } from 'src/app/interfaces/repo.model';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss']
})
export class ReposListComponent implements OnInit, OnDestroy {
  @Input() repos: Repo[];
  @Input() showBookmarkButton = false;
  subscriptions: Subscription[] = [];
  constructor(public spinnerService: SpinnerService, private loaderService: NgxSpinnerService) { }
  ngOnDestroy(): void {
    for (let sub of this.subscriptions) {
      sub.unsubscribe();
    }
  }

  ngOnInit() {
    console.log(this.repos)
    this.handleLoading();
  }
  handleLoading() {
    // handle spinner show and hide 
    this.subscriptions.push(this.spinnerService.isLoading$.subscribe(res => {
      if (res) {
        this.loaderService.show();
      }
      else {
        this.loaderService.hide();
      }
    }
    ));
  }
}
