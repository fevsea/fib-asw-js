import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Issue } from './issue';
import { ISSUES } from './mock-issues';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const httpOptions2 = {
  headers: new HttpHeaders().set('Authorization', 'Token cb219b660f6f623efd195aabe2920951968fe3fc')
  .set('Content-Type','application/json')
};

@Injectable()
export class IssueService {

  //private issuesUrl = 'http://127.0.0.1:8000/meetings';
  //private issuesUrl = 'https://jsonplaceholder.typicode.com/posts';
  private issuesUrl = 'http://localhost:8000/v1/issues';

  constructor(private http: HttpClient, private messageService: MessageService) { }


  getIssues(): Observable<Issue[]> {
    //return of(ISSUES);
    this.messageService.add('IssueService: feching issues...');
    return this.http.get<Issue[]>(this.issuesUrl,  httpOptions2)
      .pipe(
        tap(issues => this.log(`fetched issues!!`)),
        catchError(this.handleError('getIssues', []))
      );
  }

  /** GET issue by id. Will 404 if id not found */
    getIssue(id: number): Observable<Issue> {
      const url = `${this.issuesUrl}/${id}`;
      return this.http.get<Issue>(url,httpOptions2).pipe(
        tap(_ => this.log(`fetched issue id=${id}`)),
        catchError(this.handleError<Issue>(`getIssue id=${id}`))
      );
    }

    /** DELETE: delete the issue from the server */
    deleteIssue (issue: Issue | number): Observable<Issue> {
      const id = typeof issue === 'number' ? issue : issue.id;
      const url = `${this.issuesUrl}/${id}/`;

      return this.http.delete<Issue>(url, httpOptions2).pipe(
        tap(_ => this.log(`deleted issue id=${id}`)),
        catchError(this.handleError<Issue>('deleteIssue'))
      );
    }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('IssueService: ' + message);
  }

}
