'use client'

import { useState } from 'react'
import Modal from '../modal/Modal'

export const EditTeamModal = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpenModal = () => {
        setIsOpen(true)
    }
    const handleCloseModal = () => {
        setIsOpen(false)
    }

    return (
        <>
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={handleOpenModal}>
                Edit Team
            </button>
            <Modal isOpen={isOpen} onClose={handleCloseModal} formId="edit-team-form">
                Edit
            </Modal>
        </>
    )
}
