'use client'

import { calculateMedalStanding } from '@src/utils/calculateMedalStanding'
import { TableHeader } from './tableHeader/TableHeader'
import { TableRow } from './tableRow/TableRow'
import { FunctionComponent, useEffect, useState } from 'react'
import { Teams } from '@prisma/client'

interface TeamsResponse {
    teams: Teams[]
}

export const MedalTable: FunctionComponent = () => {
    const [teams, setTeams] = useState<Teams[]>([])
    const fetchUserData = async () => {
        const { teams }: TeamsResponse = await fetch('/api/teams', {
            method: 'GET',
        }).then((res) => res.json())
        setTeams(teams)
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    return (
        <table className="w-full">
            <thead>
                <TableHeader />
            </thead>
            <tbody>
                {teams &&
                    calculateMedalStanding(teams).map((team, index) => {
                        return <TableRow team={team} key={index} odd={Boolean(index % 2)} />
                    })}
            </tbody>
        </table>
    )
}
