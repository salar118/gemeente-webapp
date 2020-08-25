import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Klant } from '../model/klant';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class KlantService {
  klantApiUrl: string = 'http://127.0.0.1:3000/customers/';
  constructor(private http: HttpClient) {}

  getKlantById(id: number): Observable<Klant> {
    return this.http
      .get<Klant>(this.klantApiUrl + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
