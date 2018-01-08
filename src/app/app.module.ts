import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { IssuesComponent } from './issues/issues.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { IssueCreateComponent } from './issue-create/issue-create.component';
import { AppRoutingModule } from './/app-routing.module';
import { IssueService } from './issue.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    IssuesComponent,
    IssueDetailComponent,
    IssueCreateComponent,
    MessagesComponent
  ],

  providers: [IssueService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
