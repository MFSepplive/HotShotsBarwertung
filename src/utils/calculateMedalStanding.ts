import { MedalTableTeam } from '@src/components/medalTable/MedalTable'

export function calculateMedalStanding(teams: MedalTableTeam[]): MedalTableTeam[] {
    return teams.sort((a, b) => {
        if (a.gold > b.gold) {
            return -1
        } else if (a.gold < b.gold) {
            return 1
        } else {
            if (a.silver > b.silver) {
                return -1
            } else if (a.silver < b.silver) {
                return 1
            } else {
                if (a.bronze > b.bronze) {
                    return -1
                } else if (a.bronze < b.bronze) {
                    return 1
                } else {
                    return 0
                }
            }
        }
    })
}
