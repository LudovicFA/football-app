import { Component, OnInit } from '@angular/core';
import { StandingService } from '../services/standing.service';
import { Standing } from '../models/standing';
import { Leagues } from '../shared/leagues.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css'],
})
export class StandingsComponent implements OnInit {
  leagues = Leagues;

  standings: Standing[] | undefined = [];
  currentSeason = new Date().getFullYear();
  currentLeague: number = 0;

  constructor(
    private standingService: StandingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentLeague =
      this.standingService.currentLeague !== 0
        ? this.standingService.currentLeague
        : 0;

    if (this.currentLeague) {
      this.getStandings();
    }
  }

  getStandings() {
    this.standingService
      .getStandings(this.currentSeason, this.currentLeague)
      .subscribe((data) => {
        this.standings = data.response[0].league.standings?.at(0);
        this.currentLeague = data.response[0].league.id;
      });
  }

  onClickLeague(id: number) {
    this.currentLeague = id;
    this.getStandings();
  }

  goMatch(id: number) {
    this.router.navigate([
      '/matches',
      {
        season: this.currentSeason,
        league: this.currentLeague,
        team: id,
      },
    ]);
  }
}
