'use client'

import { FunctionComponent } from 'react'
import { MedalTableTeam } from '../MedalTable'

export interface TableRowProps {
    odd: boolean
    team: MedalTableTeam
}

export const TableRow: FunctionComponent<TableRowProps> = ({ odd, team }) => {
    return (
        <tr className={`${odd ? 'bg-white' : 'bg-gray-200'}`}>
            <td className="max-w-100 min-w-fit w-full overflow-hidden text-ellipsis whitespace-nowrap" colSpan={3}>
                {team.name}
            </td>
            <td className="pt-2.5 pr-5 pb-2.5 pl-5">{team.gold}</td>
            <td className="pt-2.5 pr-5 pb-2.5 pl-5">{team.silver}</td>
            <td className="pt-2.5 pr-5 pb-2.5 pl-5">{team.bronze}</td>
            <td className="pt-2.5 pr-5 pb-2.5 pl-5">{team.bronze + team.silver + team.gold}</td>
        </tr>
    )
}
