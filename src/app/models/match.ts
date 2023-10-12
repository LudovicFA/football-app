import { Goals } from './goals';
import { Team } from './team';

export interface Match {
  teams: {
    home: Team;
    away: Team;
  };
  goals: Goals;
}
