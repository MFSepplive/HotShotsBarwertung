'use client'

import { useState } from 'react'
import Modal from '../modal/Modal'
import { Form, FormValues } from './form/Form'
import { v4 as uuidv4 } from 'uuid'
import { SubmitHandler } from 'react-hook-form'

export const AddTeamModal = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpenModal = () => {
        setIsOpen(true)
    }
    const handleCloseModal = () => {
        setIsOpen(false)
    }

    const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
        handleCloseModal()
        await fetch('/api/teams', {
            method: 'POST',
            body: JSON.stringify({
                id: uuidv4(),
                name: data.name,
                gold: 0,
                silver: 0,
                bronze: 0,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res.json())
    }

    return (
        <div className="flex w-full justify-end">
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={handleOpenModal}>
                Add Team
            </button>
            <Modal isOpen={isOpen} onClose={handleCloseModal} formId="add-team-form">
                <Form onSubmit={onSubmit} />
            </Modal>
        </div>
    )
}
