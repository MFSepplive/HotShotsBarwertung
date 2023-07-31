'use client'

import { FunctionComponent } from 'react'
import Modal from '../modal/Modal'
import { SubmitHandler } from 'react-hook-form'
import { AddAmountFormValues, Form } from './form/Form'

interface AddAmountModalProps {
    isOpen: boolean
    handleCloseModal: () => void
    onSubmit: SubmitHandler<AddAmountFormValues>
    formId: string
}

export const AddAmountModal: FunctionComponent<AddAmountModalProps> = ({ isOpen, handleCloseModal, onSubmit, formId }) => {
    return (
        <Modal isOpen={isOpen}>
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
    )
}
