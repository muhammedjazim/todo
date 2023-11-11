import React from 'react'
import './TodoCreate.css'

function TodoCreate({setTodo, todosUpdate, todo}) {
  return (
    <div className='entering'>
        <input className='entertask' type="text" value={todo} placeholder = "Enter the task" onChange = {(e)=>setTodo(e.target.value)}/>
        <button className='glow-on-hover' onClick={todosUpdate}>+</button>
    </div>
  )
}

export default TodoCreate