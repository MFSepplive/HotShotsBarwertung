'use client'

import { addTeams } from '@src/api/addTeams'
import { FunctionComponent } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const AddButton: FunctionComponent = () => {
    return (
        <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
                addTeams({ id: uuidv4(), name: 'test2', gold: 2, silver: 2, bronze: 3 })
            }}
        >
            Add Team
        </button>
    )
}
