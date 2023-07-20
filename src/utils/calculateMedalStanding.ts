import { Teams } from '@prisma/client'

export function calculateMedalStanding(teams: Teams[]): Teams[] {
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
