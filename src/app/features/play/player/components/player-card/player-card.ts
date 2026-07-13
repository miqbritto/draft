import { Component, inject, input } from '@angular/core';

@Component({
  selector: 'app-player-card',
  imports: [],
  templateUrl: './player-card.html',
  styleUrl: './player-card.scss',
})
export class PlayerCard {

  nick = input<string>();
  score = input<number>();
  role = input<string>();


}
