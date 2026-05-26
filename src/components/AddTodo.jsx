import  { useState } from 'react'
import {useDispatch}   from "react-redux"
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {

    const [input,setInput] =useState("");
    const dispatch  = useDispatch();

    const addTodoHander = (e)=>{
        e.preventDefault();
        dispatch(addTodo(input))
        setInput(' ')
    }

  return (
    <div className='bg-[#1E1E1E] shadow-2xl  mt-20 w-125 text-black rounded-md  '>
       <form onSubmit={addTodoHander} className='flex justify-between items-centers px-6 py-4'>
        <input type="text" name='todo' 
        value={input} 
        placeholder='Enter the Todo...' 
        onChange={(e)=>setInput(e.target.value)}
        className='outline-none shadow-2xl   bg-[#2C2C2C] p-2
         rounded-md text-white  w-[80%] placeholder-gray-500 '/>
        <button className='bg-[#367DF8] px-6 py-2 rounded-md text-center'>Add</button>
       </form>
   </div>
  )
}

export default AddTodo