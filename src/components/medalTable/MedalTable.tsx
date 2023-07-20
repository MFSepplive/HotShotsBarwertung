import { calculateMedalStanding } from '@src/utils/calculateMedalStanding'
import { TableHeader } from './tableHeader/TableHeader'
import { TableRow } from './tableRow/TableRow'
import { FunctionComponent } from 'react'
import { getTeams } from '@src/api/getTeams'

export const MedalTable: FunctionComponent = async () => {
    const teams = await getTeams()
    return (
        <table className="w-full">
            <thead>
                <TableHeader />
            </thead>
            <tbody>
                {calculateMedalStanding(teams).map((team, index) => {
                    return <TableRow team={team} key={index} odd={Boolean(index % 2)} />
                })}
            </tbody>
        </table>
    )
}
