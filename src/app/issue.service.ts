import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Issue } from './issue';
import { ISSUES } from './mock-issues';

@Injectable()
export class IssueService {

  constructor() { }

  getIssues(): Observable<Issue[]> {
    return of(ISSUES);
  }

}
