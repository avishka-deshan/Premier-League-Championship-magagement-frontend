
import {Routes, RouterModule} from '@angular/router';
import {FootballClubComponent} from './football-club/football-club.component';
import {MatchDataComponent} from './match-data/match-data.component';

const routes: Routes = [
  {path: 'pLTable', component: FootballClubComponent},
  {path: '', redirectTo: '/football', pathMatch: 'full'},
  {path: 'matchData',  component: MatchDataComponent}
];

export const appRouting = RouterModule.forRoot(routes);
