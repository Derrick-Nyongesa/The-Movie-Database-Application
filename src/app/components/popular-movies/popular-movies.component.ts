import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

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

  searchStr: string;
  searchRes: string;
  search_all: any;

  constructor(private http: MoviesService) {}

  ngOnInit(): void {
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

  searchMovies(page: number) {
    this.http.searchMovies(this.searchStr, page).subscribe((res) => {
      this.searchRes = res.results;
      this.search_all = res.total_results;
    });
  }
}
