import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { delay } from 'rxjs/internal/operators/delay';
import { animate, style, transition, trigger } from '@angular/animations';
import { TvService } from 'src/app/services/tv.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  nowPlaying: any;
  responsiveOptions;
  latest: any;

  tvShows: any;

  constructor(
    private movie: MoviesService,
    private tv: TvService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.trendingMovies(1);
    this.trendingTvShows(1);
  }

  trendingMovies(page: number) {
    this.movie.getNowPlaying(page).subscribe((res: any) => {
      this.nowPlaying = res.results;
      console.log(res);
    });
  }

  trendingTvShows(page: number) {
    this.tv.getTvOnTheAir(page).subscribe((res) => {
      this.tvShows = res.results;
      console.log(res);
    });
  }
}
