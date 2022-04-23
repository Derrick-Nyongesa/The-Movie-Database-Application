import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroImageComponent } from './components/hero-image/hero-image.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { MovieInfoBarComponent } from './components/movie-info-bar/movie-info-bar.component';
import { HomeComponent } from './components/home/home.component';
import { ActorsComponent } from './components/actors/actors.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MovieComponent } from './components/movie/movie.component';
import { FooterComponent } from './components/footer/footer.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TrendingMoviesComponent } from './components/trending-movies/trending-movies.component';
import { TopRatedMoviesComponent } from './components/top-rated-movies/top-rated-movies.component';
import { BreadCrumbMoviesComponent } from './components/bread-crumb-movies/bread-crumb-movies.component';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';
import { UpcomingMoviesComponent } from './components/upcoming-movies/upcoming-movies.component';
import { NumberWithCommasPipe } from './pipes/number-with-commas.pipe';
import { TimePipe } from './pipes/time.pipe';
import { FullDatePipe } from './pipes/full-date.pipe';
import { PersonComponent } from './components/person/person.component';
import { TvTestComponent } from './components/tv-test/tv-test.component';
import { GenresComponent } from './components/genres/genres.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BreadCrumbComponent,
    NavbarComponent,
    HeroImageComponent,
    MovieInfoComponent,
    MovieInfoBarComponent,
    HomeComponent,
    ActorsComponent,
    NotFoundComponent,
    MovieComponent,
    FooterComponent,
    MoviesComponent,
    TrendingMoviesComponent,
    TopRatedMoviesComponent,
    BreadCrumbMoviesComponent,
    PopularMoviesComponent,
    UpcomingMoviesComponent,
    NumberWithCommasPipe,
    TimePipe,
    FullDatePipe,
    PersonComponent,
    TvTestComponent,
    GenresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    IvyCarouselModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
