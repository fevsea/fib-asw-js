import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssuesComponent }      from './issues/issues.component';
import { IssueDetailComponent }  from './issue-detail/issue-detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'issues', pathMatch: 'full' },
  { path: 'detail/:id', component: IssueDetailComponent },
  { path: 'issues', component: IssuesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
