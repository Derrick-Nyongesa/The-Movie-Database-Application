import { Component, OnInit, ViewChild } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute, Params } from '@angular/router';

export interface Movie {
  title?: string;
  vote_average?: number;
  overview?: string;
  backdrop_path?: string;
  vote_count?: number;
  release_date?: any;
  runtime?: any;
  budget?: number;
  revenue?: number;
  genres: string[];
}

export interface Cast {
  name?: string;
}

export interface Video {
  name?: string;
}

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movie: Movie;
  public id: number;
  public video: boolean;
  relatedVideos: Video[] = [];
  images: any = [];
  casts: Cast[] = [];
  movies: any;

  viewMode = 'tab1';

  constructor(private http: MoviesService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getMovie(this.id);
      this.getMovieVideos(this.id);
      this.getCast(this.id);
      this.getBackropsImages(this.id);
      this.getRecommendedMovies(this.id);
    });
  }

  getMovie(id) {
    this.http.getMovie(id).subscribe(
      (data) => {
        this.movie = data;
        // console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getMovieVideos(id) {
    this.http.getMovieVideos(id).subscribe((res: any) => {
      if (res.results.length) {
        this.video = res.results[0];
        this.relatedVideos = res.results;
        // console.log(res);
      }
    });
  }

  getBackropsImages(id) {
    this.http.getBackdropsImages(id).subscribe((res: any) => {
      this.images = res.backdrops;
    });
  }

  getCast(id) {
    this.http.getMovieCredits(id).subscribe((res: any) => {
      this.casts = res.cast;
    });
  }

  getRecommendedMovies(id) {
    this.http.getRecomendMovies(id).subscribe((res) => {
      this.movies = res.results;
      // console.log(res);
    });
  }
}
