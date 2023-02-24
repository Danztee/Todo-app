import React from "react";
import TodoItem from "./TodoItem";

const TodoBody = (props) => {
  return (
    <div className="todo-body">
      <TodoItem todo={props.todo} />
    </div>
  );
};

export default TodoBody;
