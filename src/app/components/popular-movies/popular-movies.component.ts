import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css'],
})
export class PopularMoviesComponent implements OnInit {
  all_movies: any;
  movies: any;
  total_results: any;

  p: number = 1;
  itemsPerPage = 18;

  constructor(
    private http: MoviesService,
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
    return this.http.getPopular(page).subscribe(
      (res) => {
        this.movies = res.results;
        this.all_movies = res.total_results;
      },
      (error) => console.log(error)
    );
  }
}
