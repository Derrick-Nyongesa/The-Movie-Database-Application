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

  constructor(private http: MoviesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.title = params['name'];
      this.getMovieGenre(this.id);
    });
  }

  getMovieGenre(id) {
    this.http.getMoviesByGenre(id).subscribe((res: any) => {
      this.movies = res.results;
      console.log(res);
    });
  }
}
