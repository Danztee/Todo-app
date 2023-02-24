import React from "react";

const TodoItem = (props) => {
  const todos = props.todo;

  return (
    <div>
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
    </div>
  );
};

export default TodoItem;
