'use client'
import { FunctionComponent } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const AddButton: FunctionComponent = () => {
    const handleAddClick = async () => {
        const data = await fetch('/api/teams', {
            method: 'POST',
            body: JSON.stringify({
                id: uuidv4(),
                name: 'Hallo',
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res.json())
    }

    const handleDeleteClick = async (id: string) => {
        const data = await fetch(`/api/teams/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res.json())
    }

    return (
        <>
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddClick}>
                Add Team
            </button>
            <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleDeleteClick('4a32a1c4-12e1-4fa7-a866-2d4fe97bdcfb')}
            >
                Delete Team
            </button>
        </>
    )
}
