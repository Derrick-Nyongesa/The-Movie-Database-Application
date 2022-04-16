import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.css'],
})
export class TrendingMoviesComponent implements OnInit {
  constructor(private http: MoviesService) {}

  ngOnInit(): void {}
}
