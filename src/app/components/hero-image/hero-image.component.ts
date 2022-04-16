import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

export interface Variant {
  title?: string;
  overview?: string;
}

@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.css'],
  animations: [
    trigger('fade', [
      transition('void =>*', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition('* => void', [
        style({ opacity: 1 }),
        animate('300ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class HeroImageComponent implements OnInit {
  upcoming: any;
  current = 0;
  variant: Variant;

  constructor(private movie: MoviesService) {
    this.movie.getVariant().then((variants) => {
      this.variant = variants;
    });
  }

  ngOnInit(): void {
    // this.latestMovie(1);
    // this.sliderTimer();
  }

  // latestMovie(page: number) {
  //   this.http.getUpcoming(page).subscribe((res: any) => {
  //     this.upcoming = res.results;
  //     console.log(res);
  //   });
  // }

  // sliderTimer() {
  //   setInterval(() => {
  //     this.current = ++this.current % this.upcoming.length;
  //   }, 5000);
  // }
}
