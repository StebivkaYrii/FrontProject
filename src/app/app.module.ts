import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {PopularFilmsComponent} from './components/popular-films/popular-films.component';
import {NowPlayingFilmsComponent} from './components/now-playing-films/now-playing-films.component';
import {HeaderComponent} from './components/header/header.component';
import {FilmSearchComponent} from './components/film-search/film-search.component';
import {NowPlayingResolver} from "./components/now-playing-films/now-playing.resolver";
import {PopularFilmResolver} from "./components/popular-films/popular-film.resolver";
import {FilmDetailsResolver} from "./modules/films/components/film-details/film-details.resolver";
import {DeactivatorGuard} from "./modules/films/components/film-details/guard/deactivator.guard";


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PopularFilmsComponent,
    NowPlayingFilmsComponent,
    HeaderComponent,
    FilmSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    NowPlayingResolver,
    PopularFilmResolver,
    FilmDetailsResolver,
    DeactivatorGuard
  ],
  exports: [
    PopularFilmsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
