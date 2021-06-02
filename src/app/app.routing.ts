import {Routes, RouterModule} from '@angular/router';
import {FootballClubComponent} from './football-club/football-club.component';
import {MatchDataComponent} from './match-data/match-data.component';

const routes: Routes = [
  {path: 'football', component: FootballClubComponent},
  {path: 'matchData',  component: MatchDataComponent},
  {path: '**', redirectTo: 'football'},
];

export const appRouting = RouterModule.forRoot(routes);
