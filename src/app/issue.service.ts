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
  headers: new HttpHeaders({ 'Authorization': 'Token 4e0d12e68ac4b387e87e04d8646f461cb782000d' })
};

@Injectable()
export class IssueService {

  //private issuesUrl = 'http://127.0.0.1:8000/meetings';
  private issuesUrl = 'https://jsonplaceholder.typicode.com/posts';
  //private issuesUrl = 'https://asw-django.herokuapp.com/v1/issues/';

  constructor(private http: HttpClient, private messageService: MessageService) { }


  getIssues(): Observable<Issue[]> {
    //return of(ISSUES);
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Issue[]>(this.issuesUrl, httpOptions2)
      .pipe(
        tap(issues => this.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
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
    this.messageService.add('HeroService: ' + message);
  }

}
