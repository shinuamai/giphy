import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Giphy } from '../interfaces/giphy';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  private baseUrl = 'https://api.giphy.com/v1/gifs/trending';
  private urlSearch = 'https://api.giphy.com/v1/gifs/search'
  private apiKey = 'ib0VTbUXjj5LlyrFP969nsWRxg3WrIpD';
  private limit = 12;

  constructor(private http: HttpClient) {
  }

  getData(offset: number): Observable<any> {
    const url = `${this.baseUrl}?api_key=${this.apiKey}&limit=${this.limit}&offset=${offset}&rating=g&bundle=messaging_non_clips`;
    return this.http.get(url)
      .pipe(
        catchError(error => {
          console.error('Ocurrió un error en la solicitud HTTP GET:', error);
          return throwError(() => error);
        })
      );
  }

  search(value: any, offset: number): Observable<any> {
    const url = `${this.urlSearch}?api_key=${this.apiKey}&q=${value}&limit=${this.limit}&offset=${offset}&rating=g&lang=es&bundle=messaging_non_clips`;
    return this.http.get(url)
      .pipe(
        catchError(error => {
          console.error('Ocurrió un error en la solicitud HTTP GET:', error);
          return throwError(() => error);
        })
      );
  }
}
