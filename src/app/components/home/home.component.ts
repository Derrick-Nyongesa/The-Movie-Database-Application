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
  topRated: any;
  popular: any;
  upcoming: any;

  tvShows: any;
  topRatedTv: any;
  popularTv: any;

  constructor(
    private movie: MoviesService,
    private tv: TvService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.trendingMovies(1);
    this.trendingTvShows(1);
    this.topRatedMovies(1);
    this.popularMovies(1);
    this.upComingMovies(1);
    this.topRatedTvShows(1);
    this.popularTvShows(1);
  }

  trendingMovies(page: number) {
    this.movie.getNowPlaying(page).subscribe((res: any) => {
      this.nowPlaying = res.results;
    });
  }

  topRatedMovies(page: number) {
    this.movie.getTopRatedMovies(page).subscribe((res: any) => {
      this.topRated = res.results;
    });
  }

  popularMovies(page: number) {
    this.movie.getPopular(page).subscribe((res: any) => {
      this.popular = res.results;
    });
  }

  upComingMovies(page: number) {
    this.movie.getUpComingMovies(page).subscribe((res: any) => {
      this.upcoming = res.results;
    });
  }

  trendingTvShows(page: number) {
    this.tv.getTvOnTheAir(page).subscribe((res) => {
      this.tvShows = res.results;
    });
  }

  topRatedTvShows(page: number) {
    this.tv.getTopRatedTVShows(page).subscribe((res) => {
      this.topRatedTv = res.results;
    });
  }

  popularTvShows(page: number) {
    this.tv.getPopularTVShow(page).subscribe((res) => {
      this.popularTv = res.results;
    });
  }
}
