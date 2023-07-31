import { FunctionComponent, PropsWithChildren } from 'react'

interface ModalProps {
    isOpen: boolean
}

const Modal: FunctionComponent<PropsWithChildren<ModalProps>> = ({ isOpen, children }) => {
    return (
        <>
            {isOpen && (
                <>
                    <div className="fixed z-10 inset-0 overflow-y-auto ">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div
                                className="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 w-10/12 max-h-full"
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="modal-headline"
                            >
                                <div className="p-3 flex gap-3 flex-col">
                                    <div>Header</div>
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Modal
