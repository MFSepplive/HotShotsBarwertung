'use client'

import { useState, useEffect } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { AddAmountFormValues } from '../addAmountModal/form/Form'
import { AddAmountModal } from '../addAmountModal/AddAmountModal'
import { AddTeamModal } from '../addTeamModal/AddTeamModal'
import { DeleteTeamModal } from '../deleteTeamModal/DeleteTeamModal'

export interface AdminListTeam {
    id: string
    name: string
}

interface AdminListTeamsResponse {
    teams: AdminListTeam[]
}

export const TeamsList = () => {
    const [teams, setTeams] = useState<AdminListTeam[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [selectedId, setSelectedId] = useState<string>('')
    const [isOpenAddAmountModal, setIsOpenAddAmountModal] = useState(false)
    const [isOpenDeleteTeamModal, setIsOpenDeleteTeamModal] = useState(false)

    const fetchUserData = async () => {
        const { teams }: AdminListTeamsResponse = await fetch('/api/teams', {
            method: 'GET',
        }).then((res) => res.json())
        setLoading(false)
        setTeams(teams)
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    // AddTeamModal Logic
    const handleAddTeam = (teams: AdminListTeam[]) => {
        setTeams(teams)
    }

    // DeleteTeamModal Logic
    const handleCloseDeleteTeamModal = () => {
        setIsOpenDeleteTeamModal(false)
    }

    const handleOpenDeleteTeamModal = (id: string) => {
        setSelectedId(id)
        setIsOpenDeleteTeamModal(true)
    }

    const handleDeleteTeam = async (id: string) => {
        const { teams: newTeams } = await fetch(`/api/teams/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res.json())

        setTeams(newTeams)
        handleCloseDeleteTeamModal()
    }

    // AddAmountModal Logic
    const handleCloseAddAmountModal = () => {
        setIsOpenAddAmountModal(false)
    }

    const handleAddAmountClick = (id: string) => {
        setIsOpenAddAmountModal(true)
        setSelectedId(id)
    }

    const onSubmit: SubmitHandler<AddAmountFormValues> = async (data: AddAmountFormValues) => {
        handleCloseAddAmountModal()
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

    return (
        <div>
            <div className="flex flex-col gap-2 mb-10 mt-10">
                {loading ? (
                    <div className="flex justify-center items-center">Laden...</div>
                ) : teams.length === 0 ? (
                    <div className="flex justify-center items-center">Kein Teams gefunden</div>
                ) : (
                    <>
                        {teams.map((team) => {
                            return (
                                <div className="w-full pb-2 border-b border-black flex items-center justify-between" key={team.id}>
                                    <div>{team.name}</div>
                                    <div>
                                        <button
                                            className="pt-2 pb-2 pl-2 pr-2 border rounded bg-red-500 hover:bg-red-700 border-gray-300 text-white font-bold mr-4"
                                            onClick={() => handleOpenDeleteTeamModal(team.id)}
                                        >
                                            Team löschen
                                        </button>
                                        <button
                                            className="pt-2 pb-2 pl-2 pr-2 border rounded bg-gray-500 hover:bg-gray-700 border-gray-300 w-14 text-white font-bold"
                                            onClick={() => handleAddAmountClick(team.id)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                )}
            </div>
            <AddAmountModal isOpen={isOpenAddAmountModal} handleCloseModal={handleCloseAddAmountModal} formId="add-amount-form" onSubmit={onSubmit} />
            <AddTeamModal handleAddTeam={handleAddTeam} formId="add-team-form" />
            <DeleteTeamModal
                isOpen={isOpenDeleteTeamModal}
                handleCloseModal={handleCloseDeleteTeamModal}
                handleDeleteTeam={handleDeleteTeam}
                id={selectedId}
            />
        </div>
    )
}
