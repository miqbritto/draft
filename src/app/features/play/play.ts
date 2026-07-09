import { Component, inject, signal } from '@angular/core';
import { MajorService } from './major/services/major';
import { TeamService } from './team/services/team';
import { PlayerService } from './player/services/player.service';
import { Major } from './major/models/major';
import { Team } from './team/models/team';
import { Participation, Player } from './player/models/player.model';
import { PlayerCard } from './player/components/player-card/player-card';

export interface DrawnPlayer {
  nick: string,
  score: number
}

export interface Drawn {
  major: Major,
  team: Team,
  players: DrawnPlayer[]
}

@Component({
  selector: 'app-play',
  imports: [PlayerCard],
  templateUrl: './play.html',
  styleUrl: './play.scss',
})
export class Play {

  majorService = inject(MajorService);
  teamService = inject(TeamService);
  playerService = inject(PlayerService)

  participation = signal<Participation | null>(null);
  selectedTeam = signal<Team | null>(null);
  selectedMajor = signal<Major | null>(null);
  selectedDrawn = signal<Drawn | null>(null);

  drawn(): void {
    const major = this.majorService.getRandom();
    const team = this.teamService.getByRandomIds(major.team_ids);
    const players = this.playerService
      .getParticipationByTeamAndMajor(team.id, major.id)
      .flatMap( (p) => {
        const player = this.playerService.getById(p.player_id)

        return [{
          nick: player!.nick,
          score: p.score
        }]
      });

    this.selectedDrawn.set({
      major, team, players
    })

  }
}
