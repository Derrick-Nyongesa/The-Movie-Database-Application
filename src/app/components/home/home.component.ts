import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { delay } from 'rxjs/internal/operators/delay';
import { animate, style, transition, trigger } from '@angular/animations';
import { TvService } from 'src/app/services/tv.service';
import { HttpClient } from '@angular/common/http';

export interface Movie {
  title?: string;
  overview?: string;
  poster_path?: string;
  genres: string[];
}

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

  searchStr: string;
  searchRes: string;

  newMovie: Movie;

  constructor(private movie: MoviesService) {}

  ngOnInit(): void {
    this.trendingMovies(1);

    this.topRatedMovies(1);
    this.popularMovies(1);
    this.upComingMovies(1);
    this.latestMovie();
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

  searchMovies(page: number) {
    this.movie.searchMovies(this.searchStr, page).subscribe((res: any) => {
      this.searchRes = res.results;
    });
  }

  latestMovie() {
    this.movie.getLatestMovie().subscribe(
      (data) => {
        this.newMovie = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
