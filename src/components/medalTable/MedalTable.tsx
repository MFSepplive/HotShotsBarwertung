'use client'

import { calculateMedalStanding } from '@src/utils/calculateMedalStanding'
import { TableHeader } from './tableHeader/TableHeader'
import { TableRow } from './tableRow/TableRow'
import { FunctionComponent, useEffect, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { AddAmountModal } from '../addAmountModal/AddAmountModal'
import { AddAmountFormValues, Form } from '../addAmountModal/form/Form'

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

        console.log(teams)
        setLoading(false)
        setTeams(teams)
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    return (
        <div>
            {loading ? (
                <div className="flex justify-center items-center">Loading...</div>
            ) : (
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
            )}
        </div>
    )
}
