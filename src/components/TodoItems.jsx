import React from 'react'
import tick_icon from '../assets/tick.png'
import untick_icon from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const TodoItems = ({text,id,isComplete,deleteTodo,toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        
        <div onClick={()=>{toggle(id)
        }} className='flex flex-1 cursor-pointer items-center'>
            <img src={isComplete?tick_icon:untick_icon} className='w-7' alt=""/>
            <p className={`decoration-slate-500 text-slate-700 ml-4 text-[17px] ${isComplete?'line-through':""}`}>{text}</p>
        </div>
        
        <img onClick ={()=>{
            deleteTodo(id)
        }} src={delete_icon} className='w-3.5 cursor-pointer'/>
        
    </div>
  )
}

export default TodoItems