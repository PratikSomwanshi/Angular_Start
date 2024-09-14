import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JokesService {
  constructor(private httpClient: HttpClient) {}

  getData() {
    return this.httpClient.get('https://api.sampleapis.com/jokes/goodJokes');
  }
}
