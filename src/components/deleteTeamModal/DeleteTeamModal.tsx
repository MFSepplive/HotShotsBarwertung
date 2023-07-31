'use client'

import { FunctionComponent, useState } from 'react'
import Modal from '../modal/Modal'

interface DeleteTeamModalProps {
    isOpen: boolean
    handleCloseModal: () => void
    handleDeleteTeam: (id: string) => void
    id: string
}

export const DeleteTeamModal: FunctionComponent<DeleteTeamModalProps> = ({ handleCloseModal, handleDeleteTeam, isOpen, id }) => {
    return (
        <div className="flex w-full justify-end">
            <Modal isOpen={isOpen}>
                <div>
                    <h1>Are you sure you want to delete this team?</h1>
                </div>
                <div className="w-full bg-black h-px" />
                <div className="flex justify-between items-center">
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={handleCloseModal}>
                        close
                    </button>
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDeleteTeam(id)}>
                        yes
                    </button>
                </div>
            </Modal>
        </div>
    )
}
