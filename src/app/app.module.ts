import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IvyCarouselModule } from 'angular-responsive-carousel';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    IvyCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
