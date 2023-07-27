'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

export type AddTeamFormValues = {
    name: string
}

import React, { FunctionComponent } from 'react'

interface FormProps {
    onSubmit: SubmitHandler<AddTeamFormValues>
}

export const Form: FunctionComponent<FormProps> = ({ onSubmit }) => {
    const { register, handleSubmit } = useForm<AddTeamFormValues>()

    return (
        <form id="add-team-form" onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <label className="mr-4" htmlFor="name">
                Team Name:
            </label>
            <input {...register('name')} className="border border-gray-400 p-1 rounded-md" />
        </form>
    )
}
