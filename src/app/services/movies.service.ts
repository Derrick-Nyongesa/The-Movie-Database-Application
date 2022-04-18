import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
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

  getNowPlaying(page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/now_playing?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`
    );
  }

  getUpcoming(page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/upcoming?api_key=${this.apiKey}&language=${this.language}&page=${page}&region=${this.region}`
    );
  }

  getVariant(): Promise<any> {
    return this.http
      .get(
        `${this.baseUrl}movie/latest?api_key=${this.apiKey}&language=${this.language}&country=${this.region}`
      )
      .toPromise();
  }

  getTopRatedMovies(page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/top_rated?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`
    );
  }

  getPopular(page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/popular?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`
    );
  }

  getUpComingMovies(page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/upcoming?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`
    );
  }

  searchMovies(searchStr: string, page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}search/movie?api_key=${this.apiKey}&query=${searchStr}`
    );
  }
}
