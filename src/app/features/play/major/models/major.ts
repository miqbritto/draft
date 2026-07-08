export interface Major {
    id: string,
    name: string,
    year: number,
    icon: string,
    team_ids: string[],
    winner_team_id: string
}

export interface MajorData {
  majors: Major[]
}
