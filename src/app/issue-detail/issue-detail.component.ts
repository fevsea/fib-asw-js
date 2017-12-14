import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Issue } from '../issue';
import { Location } from '@angular/common';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {
  @Input() issue: Issue;

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getIssue();
  }

  getIssue(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.issueService.getIssue(id)
    .subscribe(issue => this.issue = issue);
  }
  goBack(): void {
    this.location.back();
  }



}
