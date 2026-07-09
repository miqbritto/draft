import { Major } from "../../major/models/major"
import { Team } from "../../team/models/team"

export interface Player {
    id: string,
    nick: string,
    country: string | null
}

export interface Participation {
  player_id: Player['id'],
  major_id: Major['id'],
  team_id: Team['id'],
  rating: number,
  roster_order: number,
  score: number,
  roles: string[]
}

export type ParticipationData = Participation[];
