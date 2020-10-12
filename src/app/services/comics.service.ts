import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Md5 } from 'ts-md5';
import { Comic } from '../models/comic';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  private URL_COMICS = 'https://gateway.marvel.com:443/v1/public/comics';

  // private httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // }

  constructor(
    private httpClient: HttpClient
  ) { }

  getKey(): string {
    const md5 = new Md5();

    md5.appendStr('1')
      .appendStr('243127b2f578426245e77df3d03012aac50f9dbd')
      .appendStr('f8f256f4b17f21d5e0a7f24834b60b17');

    const hash = md5.end();

    return '?ts=1&apikey=f8f256f4b17f21d5e0a7f24834b60b17&hash='.concat(hash.toString());
  }

  getAllComics(): Observable<Comic> {

    return this.httpClient.get<Comic>(this.URL_COMICS.concat(this.getKey()))
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getComicById(id: number): Observable<Comic> {

    return this.httpClient.get<Comic>(this.URL_COMICS.concat(id.toString()).concat(this.getKey()))
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };


}
