import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { HttpClient } from '@angular/common/http';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.css'],
})
export class TopRatedMoviesComponent implements OnInit {
  all_movies: any;
  movies: any;
  total_results: any;

  p: number = 1;
  itemsPerPage = 18;

  constructor(
    private http: MoviesService,
    private pagination: HttpClient,
    private ngxService: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 1000);
    this.getMovie(1);
  }

  getMovie(page: number) {
    return this.http.getTopRatedMovies(page).subscribe(
      (res) => {
        this.movies = res.results;
        this.all_movies = res.total_results;
      },
      (error) => console.log(error)
    );
  }
}
