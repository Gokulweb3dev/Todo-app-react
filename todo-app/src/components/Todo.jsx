import React, { useEffect, useRef, useState } from 'react'
import { FaClipboardList } from "react-icons/fa";
import List from './List';


const Todo = () => {
    const[list, setList]=useState(localStorage.getItem("save")?JSON.parse(localStorage.getItem("save")):[]);

    const input=useRef();
    useEffect(()=>{
        localStorage.setItem("save",JSON.stringify(list));
    },[list])

    const add=()=>{
        const value=input.current.value.trim();
        const newitem={
            id:Date.now(),
            txt:value,
            iscomplete:false,
        }
      
            setList((pre)=>[...pre,newitem]);
        


        input.current.value="";


    }
    const deltodo=(id)=>{
        setList(list.filter(item=>item.id!==id));
    }
    const toggle=(id)=>{
        setList(list.map((ind)=>{
            if(ind.id===id){
                return {...ind, iscomplete:!ind.iscomplete}
            }else{
                return ind
            }
        }))

    }

  return (
    <div className='bg-rose-300 place-self-center w-screen max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
    <div className='flex items-center justify-center mt-7 gap-2'>
        <FaClipboardList className='text-3xl' />
        <h1 className='text-3xl font-semibold'>TODO APP</h1>
        
    </div> 
    <div className='flex items-center my-5 gap-2 bg-emerald-100 rounded-full ml-2'>
        <input ref={input} className='bg-transparent h-8 flex-1 px-2 border-0 outline-none' type='text' placeholder='enter task'/>
        <button onClick={add} className='rounded-full bg-gray-300 text-xl font-bold h-8 w-20'>ADD</button>
    </div>
    {list.map((item,i)=>{return <List key={i} txt={item.txt} id={item.id} toggle={toggle} deltodo={deltodo} iscomplete={item.iscomplete}/>})}
    </div>

  )
}

export default Todo