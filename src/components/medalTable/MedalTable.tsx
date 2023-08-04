'use client'

import { calculateMedalStanding } from '@src/utils/calculateMedalStanding'
import { TableHeader } from './tableHeader/TableHeader'
import { TableRow } from './tableRow/TableRow'
import { FunctionComponent, useEffect, useState } from 'react'

export interface MedalTableTeam {
    id: string
    name: string
    gold: number
    silver: number
    bronze: number
}

interface TeamsResponse {
    teams: MedalTableTeam[]
}

export const MedalTable: FunctionComponent = () => {
    const [teams, setTeams] = useState<MedalTableTeam[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const fetchUserData = async () => {
        const { teams }: TeamsResponse = await fetch('/api/teams', {
            method: 'GET',
        }).then((res) => res.json())

        setLoading(false)
        setTeams(teams)
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    return (
        <div>
            <h1 className="text-lg font-bold">Legende:</h1>
            <ol className="list-disc list-inside mb-4">
                <li>
                    <span className="font-bold">Gold:</span> jede Maß (Goaß, Bier, Spritzer, usw.)
                </li>
                <li>
                    <span className="font-bold">Silber:</span> Bier / Spritzer (0,5l)
                </li>
                <li>
                    <span className="font-bold">Bronze:</span> Bargetränk oder Shot
                </li>
            </ol>
            <p className="text-lg font-bold mb-3">Wertung wird ca. alle 15 Minuten aktualisiert</p>
            <h1 className="text-xl font-bold mb-3">Medaillenspiegel:</h1>
            {loading ? (
                <div className="flex justify-center items-center">Loading...</div>
            ) : (
                <>
                    {teams.length !== 0 ? (
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
                    ) : (
                        <div className="flex justify-center items-center">Keine Teams gefunden</div>
                    )}
                </>
            )}
        </div>
    )
}
