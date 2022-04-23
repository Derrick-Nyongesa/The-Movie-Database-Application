import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute, Params } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

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

  constructor(
    private http: MoviesService,
    private route: ActivatedRoute,
    private ngxService: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 1000);

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
