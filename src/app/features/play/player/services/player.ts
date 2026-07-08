import { Injectable } from '@angular/core';
import playersData from '../../../../../../public/assets/data/players.json'
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {

  readonly players = playersData.players;

  getAll(): Player[] {
    return [...this.players];
  }

  getById(id: string) {
    return this.players.find( p => p.id === id);
  }

}
