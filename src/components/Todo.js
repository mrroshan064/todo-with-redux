import React, { useState } from "react";
import FormTodo from "./FormTodo";
import ShowTodo from "./ShowTodo";

const Todo = () => {
  const [todo, setTodo] = useState([
    {
      text: "This is a sample todo",
      isComplete: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodo = [...todo, { text, isComplete: false }];
    setTodo(newTodo);
  };

  const markTodo = (index) => {
    const newTodo = [...todo];
    newTodo[index].isComplete = true;
    setTodo(newTodo);
  };

  const removeTodo = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };

  return (
    <div style={{ margin: "100px 100px", listStyle: "none" }}>
      <h3>Todo Using Component state(useState Hook)</h3>
      <FormTodo addTodo={addTodo} />
      <br />
      {todo.map((item, idx) => {
        return (
          <ShowTodo
            key={idx}
            index={idx}
            todo={item}
            markTodo={markTodo}
            removeTodo={removeTodo}
          />
        );
      })}
    </div>
  );
};

export default Todo;
