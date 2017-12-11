import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { ISSUES } from '../mock-issues';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  issues = ISSUES;
  constructor() { }

  ngOnInit() {
  }

}
