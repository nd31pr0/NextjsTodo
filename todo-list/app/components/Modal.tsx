import React from 'react';
interface ModalProps {
    modalOpen: boolean;
    setModalOpen: (open: boolean) => boolean | void;
    children: React.ReactNode
}
const Modal: React.FC<ModalProps> = ({modalOpen, setModalOpen, children}) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`} >
        <div className="modal-box">
            <div className="modal-action">
                {children}
                <label 
                    onClick={() => setModalOpen(false)}
                    className="btn"
                >
                    X
                </label>
            </div>
        </div>
    </div>
  )
}

export default Modal