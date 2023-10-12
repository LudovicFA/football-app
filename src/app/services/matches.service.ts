import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fixtures } from '../models/fixtures';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  private apiUrl: string = environment.API_URL;
  headers = new HttpHeaders({
    'x-rapidapi-key': environment.API_KEY,
  });

  constructor(private http: HttpClient) {}

  getTeamStatistics(
    season: number,
    league: number,
    team: number,
    last: number = 10
  ): Observable<Fixtures> {
    return this.http.get<Fixtures>(
      `${this.apiUrl}/fixtures?league=${league}&season=${season}&team=${team}&last=${last}`,
      { headers: this.headers }
    );
  }
}
