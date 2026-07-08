import { Component, inject, signal } from '@angular/core';
import { MajorService } from './major/services/major';
import { TeamService } from './team/services/team';
import { Major } from './major/models/major';
import { Team } from './team/models/team';


@Component({
  selector: 'app-play',
  imports: [],
  templateUrl: './play.html',
  styleUrl: './play.scss',
})
export class Play {

  majorService = inject(MajorService);
  teamService = inject(TeamService);

  selectedTeam = signal<Team | null>(null);
  selectedMajor = signal<Major | null>(null);

  drawn(){
    const major = this.majorService.getRandom();
    const team = this.teamService.getByRandomIds(major.team_ids);

    this.selectedTeam.set(team)
    this.selectedMajor.set(major);
  }
}
