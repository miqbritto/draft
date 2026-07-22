import { Component, inject, input, output, signal } from '@angular/core';
import { DrawnPlayer } from '../../../play';

@Component({
  selector: 'app-player-card',
  imports: [],
  templateUrl: './player-card.html',
  styleUrl: './player-card.scss',
})
export class PlayerCard {

  player = input.required<DrawnPlayer>();
  disabled = input<boolean>(false);
  active = input<boolean>(false);

  addToTeam = output<DrawnPlayer>();

  cardClick = output<void>();

  onClick() {
    this.addToTeam.emit(this.player())
  }




}
