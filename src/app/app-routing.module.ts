import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { TopRatedMoviesComponent } from './components/top-rated-movies/top-rated-movies.component';
import { TrendingMoviesComponent } from './components/trending-movies/trending-movies.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'trending', component: TrendingMoviesComponent },
  { path: 'top-rated', component: TopRatedMoviesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
