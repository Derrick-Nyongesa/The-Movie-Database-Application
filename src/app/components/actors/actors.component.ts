import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css'],
})
export class ActorsComponent implements OnInit {
  cast: any;
  public id: number;

  constructor(private http: MoviesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getCastDetails(this.id);
    });
  }

  getCastDetails(id) {
    this.http.getPersonDetail(id).subscribe((res: any) => {
      this.cast = res.results;
      console.log(res);
    });
  }
}
