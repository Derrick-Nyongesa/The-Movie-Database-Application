import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ActorsComponent } from './components/actors/actors.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MovieComponent } from './components/movie/movie.component';
import { FooterComponent } from './components/footer/footer.component';
import { TrendingMoviesComponent } from './components/trending-movies/trending-movies.component';
import { TopRatedMoviesComponent } from './components/top-rated-movies/top-rated-movies.component';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';
import { UpcomingMoviesComponent } from './components/upcoming-movies/upcoming-movies.component';
import { NumberWithCommasPipe } from './pipes/number-with-commas.pipe';
import { TimePipe } from './pipes/time.pipe';
import { FullDatePipe } from './pipes/full-date.pipe';
import { PersonComponent } from './components/person/person.component';
import { GenresComponent } from './components/genres/genres.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieDialogComponent } from './components/movie-dialog/movie-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadCrumbComponent,
    NavbarComponent,
    HomeComponent,
    ActorsComponent,
    NotFoundComponent,
    MovieComponent,
    FooterComponent,
    TrendingMoviesComponent,
    TopRatedMoviesComponent,
    PopularMoviesComponent,
    UpcomingMoviesComponent,
    NumberWithCommasPipe,
    TimePipe,
    FullDatePipe,
    PersonComponent,
    GenresComponent,
    MovieDialogComponent,
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
    MatDialogModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
