import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { IssuesComponent } from './issues/issues.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { IssueService } from './issue.service';


@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    IssueDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
