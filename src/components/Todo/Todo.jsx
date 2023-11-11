import React, {useEffect, useState} from 'react'
import TodoCreate from '../TodoCreate/TodoCreate'
import TodoElement from '../TodoElement/TodoElement'
import './Todo.css'
import {usePopper} from 'react-popper'


function Todo() {

  const [todos, setTodos] = useState([]);
  const [donetodos, setdonetodos] = useState([]);
  const [todo, setTodo] = useState('');

  const todosUpdate = () => {
    if(todo.length > 0) {
      setTodos([
      ...todos, {
        "task": todo,
        "done": false
      }
    ]);
    setTodo('');}
    }

  useEffect(() => {
    {/** todos listilekk puthiya todo ketti vidam, ath pinne todos create componentilum
   ivdem call cheyyamnam*/}
    console.log(todo);
    console.log(todos);
  }, [todo, setTodo, todos, setTodos]);

  const checklength = () => {
    if(todos.length > 0){
      
      return todos.sort(
        (a,b) => a.done - b.done
      ).map((todo, index) => {
        console.log("",index,todo)
        return <TodoElement todo = {todo} key = {index} index={index} deleteTodo={deleteTodo} allowTodo={allowTodo} doneTodo={doneTodo}/>
      })
    }
    else{
      return <h1>No tasks for now</h1>
    }
  }

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const allowTodo = (index, ele) => {
    const newTodos = [...todos];
    newTodos[index].task = ele;
    setTodos(newTodos);
  }

  const doneTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = true; 
    setTodos(newTodos);
  }

  useEffect(()=>{

    console.log(todos)
  }, [todos])

  return (
    <div>
      <div className = "mainbuddy">
        <div className='heading'>
          <h1>Todo</h1>  
        </div>
        <TodoCreate todo = {todo} setTodo = {setTodo} todosUpdate = {todosUpdate}/>
        {checklength()}
      </div>
    </div>
  )
}

export default Todo;