import React from 'react'
import { FaClipboardList } from "react-icons/fa";


const Todo = () => {
  return (
    <div className='bg-rose-300 place-self-center w-screen max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
    <div className='flex items-center justify-center mt-7 gap-2'>
        <FaClipboardList className='text-3xl' />
        <h1 className='text-3xl font-semibold'>TODO APP</h1>
        
    </div> 
    <div className='flex items-center my-5 gap-2 bg-emerald-100 rounded-full ml-2'>
        <input className='bg-transparent h-8 flex-1 px-2 border-0 outline-none' type='text' placeholder='enter task'/>
        <button className='rounded-full bg-gray-300 text-xl font-bold h-8 w-20'>ADD</button>
    </div>
    </div>

  )
}

export default Todo