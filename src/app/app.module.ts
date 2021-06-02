import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FootballClubComponent } from './football-club/football-club.component';
import {FormsModule} from '@angular/forms';
import { MatchDataComponent } from './match-data/match-data.component';
import {appRouting} from './app.routing';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    FootballClubComponent,
    MatchDataComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    appRouting,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
