import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Character } from '../models/character';
import { Md5 } from 'ts-md5';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private url = '';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  gerarKey(): void {
    const md5 = new Md5();

    md5.appendStr('1')
    .appendStr('243127b2f578426245e77df3d03012aac50f9dbd')
    .appendStr('f8f256f4b17f21d5e0a7f24834b60b17');

    const hash = md5.end();

    this.url = 'https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=1&apikey=f8f256f4b17f21d5e0a7f24834b60b17&hash='.concat(hash.toString());

    //this.url = 'https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=f8f256f4b17f21d5e0a7f24834b60b17&hash='.concat(hash.toString());
  }

  getCharacters(): Observable<Character> {

    this.gerarKey();

    return this.httpClient.get<Character>(this.url)
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
