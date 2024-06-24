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
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">This modal works with a hidden checkbox!</p>
            <div className="modal-action">
                <label 
                    onClick={() => setModalOpen(false)}
                    className="btn"
                >
                    Close!
                </label>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Modal