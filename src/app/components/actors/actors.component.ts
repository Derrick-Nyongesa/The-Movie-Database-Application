import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute, Params } from '@angular/router';

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

  constructor(private http: MoviesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
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

  // getCastDetails(id) {
  //   this.http.getPersonDetail(id).subscribe((res: any) => {
  //     this.cast = res.results;
  //     console.log(res);
  //   });
  // }
}
