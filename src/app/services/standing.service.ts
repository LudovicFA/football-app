import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Standings } from '../models/standings';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StandingService {
  private apiUrl: string = environment.API_URL;
  headers = new HttpHeaders({
    'x-rapidapi-key': environment.API_KEY,
  });
  protected _currentLeague: number = 0;

  get currentLeague(): number {
    return this._currentLeague;
  }
  set currentLeague(id: number) {
    this._currentLeague = id;
  }

  constructor(private http: HttpClient) {}

  getStandings(season: number, league: number): Observable<Standings> {
    this.currentLeague = league;
    return this.http.get<Standings>(
      `${this.apiUrl}/standings?league=${league}&season=${season}`,
      { headers: this.headers }
    );
  }
}
