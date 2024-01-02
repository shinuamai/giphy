import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Giphy } from '../interfaces/giphy';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  urlBase = 'https://api.giphy.com/v2/emoji?api_key=ib0VTbUXjj5LlyrFP969nsWRxg3WrIpD&limit=10&offset=0';

  constructor(private http: HttpClient) { 
  }

  getData(): Observable<Giphy[]> {
    return this.http.get<Giphy[]>(this.urlBase)
      .pipe(
        catchError(error => {
          console.error('Ocurrió un error en la solicitud HTTP GET:', error);
          return throwError(() => error);
        })
      );
  }
}
