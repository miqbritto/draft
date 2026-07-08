import { Injectable } from '@angular/core';
import teamsData from '../../../../../../public/assets/data/teams.json'
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root',
})
export class TeamService {

  readonly teams: Team[] = teamsData.teams;

  getById(id: string): Team | undefined {
    return this.teams.find( t => t.id === id);
  }

  getByIds(ids: string[]) {
    return this.teams.filter( team => ids.includes(team.id));
  }

  getByRandomIds(ids: string[]) {
    const teams = this.getByIds(ids)
    const randomId = Math.floor(Math.random() * teams.length);

    return teams[randomId];
  }
}
