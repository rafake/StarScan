import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlanetComponent } from './components/planet/planet.component';
import { PlanetService } from './services/planet.service';
import { PlanetsComponent } from './components/planets/planets.component';
import { HttpClientModule } from '@angular/common/http';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { FilmsAndResidentsComponent } from './components/films-and-residents/films-and-residents.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetComponent,
    PlanetsComponent,
    JumbotronComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FilmsAndResidentsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [PlanetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
