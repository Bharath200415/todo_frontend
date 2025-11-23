import React from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {
  return (
    <div className=' text-black bg-white place-self-center w-11/12 max-w-md
    flex flex-col p-7 min-h-[550px] rounded-xl'>

        {/* -------title ------*/}
        <div className='flex items-center mt-7 gap-2'>
            <img className='w-8' src={todo_icon} alt="todo calendar icon"/>
            <h1 className='text-3xl font-semibold text-black'>To-do List</h1>
        </div>

        {/* -------input box------*/}
        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2
            placeholder:text-slate-600' type="text" placeholder='Add your task'/>
            <button className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>Add +</button>
        </div>

        {/* -------to-do list------*/}
        <div>
            <TodoItems text={"Play Games"}/>
            <TodoItems text={"Learn coding"}/>
        </div>


    </div>
  )
}

export default Todo