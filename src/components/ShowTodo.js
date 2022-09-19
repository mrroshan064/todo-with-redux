import React from "react";

const ShowTodo = ({ index, todo, markTodo, removeTodo }) => {
    console.log(todo)
  return (
    <div>
      {
        <>
          <li style={{textDecoration: todo.isComplete ? "line-through":" "}}>
            {index + 1}. {todo.text}  
          <button onClick={()=>markTodo(index )}>Completed</button> 
          <button onClick={()=>removeTodo(index)}>Remove</button></li>
        </>
      }
    </div>
  );
};

export default ShowTodo;
