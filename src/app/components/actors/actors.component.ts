import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute, Params } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

export interface Cast {
  profile_path: any;
  name: string;
  biography: string;
  known_for_department: string;
  deathday: any;
  birthday: any;
  place_of_birth: string;
}

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css'],
})
export class ActorsComponent implements OnInit {
  cast: Cast;
  public id: number;

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
      this.getCast(this.id);
    });
  }

  getCast(id) {
    this.http.getPersonDetail(id).subscribe(
      (data) => {
        this.cast = data;
        // console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
