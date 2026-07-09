import { Component, inject, input } from '@angular/core';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player-card',
  imports: [],
  templateUrl: './player-card.html',
  styleUrl: './player-card.scss',
})
export class PlayerCard {

  nick = input<string>();
  score = input<number>();



}
