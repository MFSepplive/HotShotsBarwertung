'use client'

import { FunctionComponent, useState } from 'react'
import { AddTeamFormValues, Form } from './form/Form'
import { v4 as uuidv4 } from 'uuid'
import { SubmitHandler } from 'react-hook-form'
import { AdminListTeam } from '../adminTeamsList/AdminTeamsList'
import Modal from '@src/components/modal/Modal'

interface AddTeamModalProps {
    handleAddTeam: (teams: AdminListTeam[]) => void
    formId: string
}

export const AddTeamModal: FunctionComponent<AddTeamModalProps> = ({ handleAddTeam, formId }) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpenModal = () => {
        setIsOpen(true)
    }
    const handleCloseModal = () => {
        setIsOpen(false)
    }

    const onSubmit: SubmitHandler<AddTeamFormValues> = async (data: AddTeamFormValues) => {
        handleCloseModal()
        const { teams: newTeams } = await fetch('/api/teams', {
            method: 'POST',
            body: JSON.stringify({
                id: uuidv4(),
                name: data.name,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res.json())

        handleAddTeam(newTeams)
    }

    return (
        <div className="flex w-full justify-end">
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={handleOpenModal}>
                Add Team
            </button>
            <Modal
                isOpen={isOpen}
                header={
                    <div>
                        <h1 className="text-2xl font-bold">Add Team</h1>
                    </div>
                }
            >
                <Form onSubmit={onSubmit} formId={formId} />
                <div className="w-full bg-black h-px" />
                <div className="flex justify-between items-center">
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={handleCloseModal}>
                        close
                    </button>
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" form={formId} type="submit">
                        submit
                    </button>
                </div>
            </Modal>
        </div>
    )
}
