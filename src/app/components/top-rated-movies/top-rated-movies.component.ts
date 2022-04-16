import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: MoviesService, private pagination: HttpClient) {}

  ngOnInit(): void {
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

  // gty(page: any){
  //   this.pagination.get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=${this.itemsPerPage}`).subscribe((data: any) => {
  //     this.passenger =  data.data;
  //     this.totalItems = data.totalPassengers;
  //   })
  // }
}
