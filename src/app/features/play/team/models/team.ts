export interface Team {
    id: string,
    name: string,
    logo: string,
    hltv_id?: number
}

export interface TeamsData {
  teams: Team[];
}
