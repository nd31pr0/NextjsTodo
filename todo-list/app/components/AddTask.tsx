'use client'
import {useState} from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import Modal from './Modal';


function AddTask() {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <div className='flex gap-4'>
        <button onClick={() => setModalOpen(true)} className='btn btn-primary w-full'
        >
            Add new task <AiOutlinePlus  size={18} className="ml-2"/>
        </button>

        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
        
    </div>
  )
}

export default AddTask