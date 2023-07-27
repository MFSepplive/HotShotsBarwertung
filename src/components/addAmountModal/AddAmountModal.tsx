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
        <Modal isOpen={isOpen} onClose={handleCloseModal} formId={formId}>
            <Form onSubmit={onSubmit} formId={formId} />
        </Modal>
    )
}
