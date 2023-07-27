'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

export type AddAmountFormValues = {
    gold: number
    silver: number
    bronze: number
}

import React, { FunctionComponent } from 'react'

interface FormProps {
    onSubmit: SubmitHandler<AddAmountFormValues>
    formId: string
}

export const Form: FunctionComponent<FormProps> = ({ onSubmit, formId }) => {
    const { register, handleSubmit } = useForm<AddAmountFormValues>()

    return (
        <form id={formId} onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
                <div className="flex gap-2 flex-wrap">
                    <label className="mr-4 block w-40" htmlFor="gold">
                        Gold Amount:
                    </label>
                    <input type="number" {...register('gold')} className="border border-gray-400 p-1 rounded-md" />
                </div>
                <div className="flex gap-2 flex-wrap">
                    <label className="mr-4 block w-40" htmlFor="silver">
                        Silver Amount:
                    </label>
                    <input type="number" {...register('silver')} className="border border-gray-400 p-1 rounded-md" />
                </div>
                <div className="flex gap-2 flex-wrap">
                    <label className="mr-4 block w-40" htmlFor="bronze">
                        Bronze Amount:
                    </label>
                    <input type="number" {...register('bronze')} className="border border-gray-400 p-1 rounded-md" />
                </div>
            </div>
        </form>
    )
}
