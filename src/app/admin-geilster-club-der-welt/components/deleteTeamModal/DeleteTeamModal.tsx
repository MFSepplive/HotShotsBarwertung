'use client'

import Modal from '@src/components/modal/Modal'
import { FunctionComponent, useState } from 'react'

interface DeleteTeamModalProps {
    isOpen: boolean
    handleCloseModal: () => void
    handleDeleteTeam: (id: string) => void
    id: string
}

export const DeleteTeamModal: FunctionComponent<DeleteTeamModalProps> = ({ handleCloseModal, handleDeleteTeam, isOpen, id }) => {
    return (
        <div className="flex w-full justify-end">
            <Modal
                isOpen={isOpen}
                header={
                    <div>
                        <h1 className="text-2xl font-bold">Team löschen</h1>
                    </div>
                }
            >
                <div>
                    <h1>Bist du sicher das du das Team löschen willst?</h1>
                </div>
                <div className="w-full bg-black h-px" />
                <div className="flex justify-between items-center">
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={handleCloseModal}>
                        Schließen
                    </button>
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDeleteTeam(id)}>
                        Ja
                    </button>
                </div>
            </Modal>
        </div>
    )
}
