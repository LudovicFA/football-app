import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchesService } from '../services/matches.service';
import { Match } from '../models/match';
import { League } from '../models/league';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.css'],
})
export class MatchesListComponent implements OnInit {
  matches: Match[] = [];
  league: League | undefined;
  constructor(
    private matchesService: MatchesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const season = this.activatedRoute.snapshot.paramMap.get('season');
    const league = this.activatedRoute.snapshot.paramMap.get('league');
    const team = this.activatedRoute.snapshot.paramMap.get('team');
    if (season && league && team) {
      this.matchesService
        .getTeamStatistics(Number(season), Number(league), Number(team))
        .subscribe((data) => {
          this.matches = data.response;
        });
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
