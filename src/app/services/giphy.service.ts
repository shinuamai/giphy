import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Giphy } from '../interfaces/giphy';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  private baseUrl = 'https://api.giphy.com/v1/gifs';
  private apiKey = 'ib0VTbUXjj5LlyrFP969nsWRxg3WrIpD';
  private limit = 12;

  constructor(private http: HttpClient) {
  }

  getData(offset: number): Observable<any> {
    const url = `${this.baseUrl}/trending?api_key=${this.apiKey}&limit=${this.limit}&offset=${offset}&rating=g&bundle=messaging_non_clips`;
    return this.http.get(url)
      .pipe(
        catchError(error => {
          console.error('Ocurrió un error en la solicitud HTTP GET:', error);
          return throwError(() => error);
        })
      );
  }

  search(value: any, offset: number): Observable<any> {
    const url = `${this.baseUrl}/search?api_key=${this.apiKey}&q=${value}&limit=${this.limit}&offset=${offset}&rating=g&lang=es&bundle=messaging_non_clips`;
    return this.http.get(url)
      .pipe(
        catchError(error => {
          console.error('Ocurrió un error en la solicitud HTTP GET:', error);
          return throwError(() => error);
        })
      );
  }

  getById(giphyId:string):Observable<any> {
    const url = `${this.baseUrl}/${giphyId}?api_key=${this.apiKey}&rating=g`;
    return this.http.get(url)
      .pipe(
        catchError(error => {
          console.error('Ocurrió un error en la solicitud HTTP GET:', error);
          return throwError(() => error);
        })
      );
  }
}
