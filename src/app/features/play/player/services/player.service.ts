import { Injectable } from '@angular/core';
import playersData from '../../../../../../public/assets/data/players.json'
import participationsData from '../../../../../../public/assets/data/participations.json'
import { Player, Participation, ParticipationData } from '../models/player.model';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {

  readonly players = playersData.players;
  readonly participations = participationsData as ParticipationData;

  getAll(): Player[] {
    return [...this.players];
  }

  getById(id: string) {
    return this.players.find( p => p.id === id);
  }

  getParticipationByTeamAndMajor(teamId: string, majorId: string): Participation[] {
    return this.participations
      .filter( p => p.team_id === teamId && p.major_id === majorId)
  }

}
