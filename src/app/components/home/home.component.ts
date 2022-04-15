import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { delay } from 'rxjs/internal/operators/delay';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  nowPlaying: any;
  responsiveOptions;

  constructor(private http: MoviesService) {}

  ngOnInit(): void {
    this.trendingMovies(1);
  }

  trendingMovies(page: number) {
    this.http.getNowPlaying(page).subscribe((res: any) => {
      this.nowPlaying = res.results;
      console.log(res);
    });
  }
}
