import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchesListComponent } from './matches-list/matches-list.component';
import { StandingsComponent } from './standings/standings.component';

const routes: Routes = [
  {
    path: '',
    title: 'Football App',
    component: StandingsComponent,
  },
  {
    path: 'matches/:season/:league/:team',
    title: 'Football App - Detail Team',
    component: MatchesListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
