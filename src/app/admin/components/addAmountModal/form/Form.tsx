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
                        Goldanzahl:
                    </label>
                    <input type="number" {...register('gold')} className="border border-gray-400 p-1 rounded-md" />
                </div>
                <div className="flex gap-2 flex-wrap">
                    <label className="mr-4 block w-40" htmlFor="silver">
                        Silberanzahl:
                    </label>
                    <input type="number" {...register('silver')} className="border border-gray-400 p-1 rounded-md" />
                </div>
                <div className="flex gap-2 flex-wrap">
                    <label className="mr-4 block w-40" htmlFor="bronze">
                        Bronzeanzahl:
                    </label>
                    <input type="number" {...register('bronze')} className="border border-gray-400 p-1 rounded-md" />
                </div>
            </div>
            <h1 className="text-lg font-bold mt-6">Legende:</h1>
            <ol className="list-disc list-inside mb-4">
                <li>
                    <span className="font-bold">Gold:</span> jede Maß (Goaß, Bier, Spritzer, usw.)
                </li>
                <li>
                    <span className="font-bold">Silber:</span> Bier / Spritzer (0,5l)
                </li>
                <li>
                    <span className="font-bold">Bronze:</span> Bargetränk oder Shot
                </li>
            </ol>
        </form>
    )
}
