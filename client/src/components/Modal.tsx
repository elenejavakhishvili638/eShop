import { createPortal } from "react-dom"
import "./Modal.css"

type Props = {
    text: string,
    closeModal: () => void
}

const Modal = ({ text, closeModal }: Props) => {
    const modalContent = (
        <div className="modal-wrapper" onClick={closeModal}>
            <div className="modal">
                <h2>{text}</h2>
            </div>
        </div>
    )
    return createPortal(modalContent, document.getElementById('modal')!)
}

export default Modal