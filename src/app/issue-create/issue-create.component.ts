import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Issue } from '../issue';
import { Location } from '@angular/common';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issue-create',
  templateUrl: './issue-create.component.html',
  styleUrls: ['./issue-create.component.css']
})
export class IssueCreateComponent implements OnInit {
  @Input() issue: Issue;

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }



}
