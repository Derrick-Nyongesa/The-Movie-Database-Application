import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

export interface Genres {
  name: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isCollapsed = false;

  genreslist: any;

  constructor(private http: MoviesService) {}

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void {
    this.MovieGenre();
  }

  MovieGenre() {
    this.http.getGenres().subscribe((res: any) => {
      this.genreslist = res.genres;
    });
  }
}
