import { League } from './league';

export interface Standings {
  response: {
    league: League;
  }[];
}
