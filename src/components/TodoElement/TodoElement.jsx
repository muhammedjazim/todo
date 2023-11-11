import React, {useState, useRef, useEffect} from 'react'
import './TodoElement.css'

function TodoElement({todo, index, deleteTodo, allowTodo, doneTodo}) {
  const [editState, setEditState] = useState(false);
  const [ele, setEle] = useState("");
  const reference = useRef(null);

  const ToggleEditMode = () => {
    reference.current.contentEditable = !editState
    reference.current.classList.toggle("strike-hover")
    setEditState(!editState);
  }

  const editTodo = () => {
    ToggleEditMode();
    reference.current.focus();
  }

  const cancelTodo = () => {
    ToggleEditMode();
    setEle(todo.task);
    
  }

  useEffect(()=>{
    setEle(todo.task)

  }, [todo.task])

  return (
    <div className='tasksedit'>
        <div ref = {reference} type = "text" contentEditable={editState} className={`taskname ${todo.done==true? "strike" : "strike-hover"}`} onChange={(e)=>setEle(e.target.innerText)} onClick={(e)=>doneTodo(index)} suppressContentEditableWarning={true}>
          {ele}
        </div>
        {/* <button className = "glow-on-hover">✓</button> */}
        { editState === false ? todo.done === true ? <></> : 
            <>
            <button onClick={()=>deleteTodo(index)} className = "glow-on-hover">☓</button>
            <button onClick={()=>editTodo(index)} className = "glow-on-hover">✏️</button>
            </>:
            <>
            <button onClick={()=>cancelTodo(index)} className = "glow-on-hover">☓</button>
            <button onClick={()=>{
              ToggleEditMode()
              allowTodo(index, ele)}} className = "glow-on-hover">✓</button>
            </> 
        }   
    </div>
  )
}

export default TodoElement