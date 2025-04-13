import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { todoList } from './TodoSelector';
import { addTodo, fetchTodos } from './TodoSlice';

const Todo = () => {
  const [text, setText] = useState('');
  const todos = useSelector(todoList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleClick = ()=> {
    dispatch(addTodo({title:`title-${id}`,comment:text}))
  }
  
  return (
    <div>
        <input type="text" onChange={(e)=>setText(e.target.value)}/>
        <button onClick={handleClick}>Add</button>
        <br />
        <br />
        {todos.map((todo,index)=>(
            <div key={todo.id || index}>
            <h1>{todo?.id}</h1>
            <p>{todo?.todo}</p>
            </div>
        ))}
    </div>
  )
}

export default Todo