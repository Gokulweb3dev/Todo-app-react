import React from 'react'
import { ImCheckboxUnchecked } from "react-icons/im";
import { FaCheckSquare } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";

const List = (props) => {
  return (
    <div className='flex items-center text-2xl '>
        <div className='mx-3' onClick={()=>{props.toggle(props.id)}}>{props.iscomplete?<FaCheckSquare />: <ImCheckboxUnchecked  /> 
        }</div>
        <div className={`mx-3 flex-1 ${props.iscomplete?"line-through":""} decoration-slate-300`}>
            <h1>{props.txt}</h1>

        </div>
    
        <div className='mx-3' onClick={()=>{props.deltodo(props.id)}}>
            <RiDeleteBin2Fill />

        </div>
  
        
       
        
    </div>
  )
}

export default List