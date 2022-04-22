import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css'],
})
export class GenresComponent implements OnInit {
  movies: any;
  public id: number;
  title: string;

  all_movies: any;
  p: number = 1;
  itemsPerPage = 18;

  constructor(private http: MoviesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.title = params['name'];
      this.getMovieGenre(this.id, 1);
    });
  }

  getMovieGenre(id, page: number) {
    this.http.getMoviesByGenre(id, page).subscribe((res) => {
      this.movies = res.results;
      this.all_movies = res.total_results;
      console.log(res);
    });
  }
}
