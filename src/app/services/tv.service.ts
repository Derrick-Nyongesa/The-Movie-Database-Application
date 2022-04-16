import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TvService {
  baseUrl: string;
  apiKey: string;
  language: string;
  region: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.apiKey = environment.apiKey;
    this.language = 'en-us';
    this.region = 'US';
  }

  getTvOnTheAir(page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}tv/on_the_air?api_key=${this.apiKey}&page=${page}&language=${this.language}`
    );
  }

  getTopRatedTVShows(page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}tv/top_rated?api_key=${this.apiKey}&page=${page}&language=${this.language}`
    );
  }

  getPopularTVShow(page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}tv/popular?api_key=${this.apiKey}&page=${page}&language=${this.language}`
    );
  }
}
