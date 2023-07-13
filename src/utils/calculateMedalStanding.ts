export interface MedalCount {
    country: string;
    gold: number;
    silver: number;
    bronze: number;
    total: number;
}

export function calculateMedalStanding(medalCounts: MedalCount[]): MedalCount[] {
    return medalCounts.sort((a, b) => {
        if (a.gold > b.gold) {
            return -1;
        } else if (a.gold < b.gold) {
            return 1;
        } else {
            if (a.silver > b.silver) {
                return -1;
            } else if (a.silver < b.silver) {
                return 1;
            } else {
                if (a.bronze > b.bronze) {
                    return -1;
                } else if (a.bronze < b.bronze) {
                    return 1;
                } else {
                    return 0;
                }
            }
        }
    });
}
