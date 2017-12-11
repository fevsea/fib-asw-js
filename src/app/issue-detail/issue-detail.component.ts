import { Component, OnInit, Input } from '@angular/core';
import { Issue } from '../issue';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {
  @Input() issue: Issue;
  constructor() { }

  ngOnInit() {
  }

}
