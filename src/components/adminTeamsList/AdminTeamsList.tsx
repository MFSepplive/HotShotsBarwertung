'use client'

import { useState, useEffect } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { AddAmountFormValues } from '../addAmountModal/form/Form'
import { AddAmountModal } from '../addAmountModal/AddAmountModal'

export interface AdminListTeam {
    id: string
    name: string
}

interface AdminListTeamsResponse {
    teams: AdminListTeam[]
}

export const AdminTeamsList = () => {
    const [teams, setTeams] = useState<AdminListTeam[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [selectedId, setSelectedId] = useState<string>('')
    const [isOpen, setIsOpen] = useState(false)

    const fetchUserData = async () => {
        const { teams }: AdminListTeamsResponse = await fetch('/api/teams', {
            method: 'GET',
        }).then((res) => res.json())

        console.log(teams)
        setLoading(false)
        setTeams(teams)
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    // AddAmountModal Logic
    const handleCloseModal = () => {
        setIsOpen(false)
    }

    const onSubmit: SubmitHandler<AddAmountFormValues> = async (data: AddAmountFormValues) => {
        handleCloseModal()
        await fetch('/api/addAmount', {
            method: 'POST',
            body: JSON.stringify({
                id: selectedId,
                gold: data.gold,
                silver: data.silver,
                bronze: data.bronze,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }

    const handleRowClick = (id: string) => {
        setIsOpen(true)
        setSelectedId(id)
    }

    return (
        <div>
            <div className="flex flex-col gap-2 mb-10 mt-10">
                {teams.map((team) => {
                    return (
                        <div className="w-full pb-2 border-b border-black flex items-center justify-between" key={team.id}>
                            <div>{team.name}</div>
                            <button
                                className="pt-2 pb-2 pl-2 pr-2 border rounded bg-gray-500 hover:bg-gray-700 border-gray-300 w-14 text-white font-bold"
                                onClick={() => handleRowClick(team.id)}
                            >
                                +
                            </button>
                        </div>
                    )
                })}
            </div>
            <AddAmountModal isOpen={isOpen} handleCloseModal={handleCloseModal} formId="add-amount-form" onSubmit={onSubmit} />
        </div>
    )
}
