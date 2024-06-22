import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";


function AddTask() {
  return (
    <div className='flex gap-4'>
        <button className='btn btn-primary w-full'>Add new task
        <AiOutlinePlus  size={18} className="ml-2"/></button>
        
    </div>
  )
}

export default AddTask