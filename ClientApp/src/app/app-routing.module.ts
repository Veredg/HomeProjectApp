import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { BookmarkedReposListComponent } from './repos/bookmarked-repos-list/bookmarked-repos-list.component';
import { ContainerComponent } from './container/container.component';


const routes: Routes = [
  {
    path: '',
    component: ContainerComponent
  },
  {
    path: 'my-bookmarks',
    component: BookmarkedReposListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


