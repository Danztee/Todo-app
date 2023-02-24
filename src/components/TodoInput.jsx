import React, { useState } from "react";

const TodoInput = (props) => {
  const [todoValue, setTodoValue] = useState("");
  let todo = "";

  function changehandler(e) {
    setTodoValue(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    todo = todoValue;
    setTodoValue("");
    props.todoValue(todo);
  }

  return (
    <form className="todo-input" onSubmit={submitHandler}>
      <p>Todo?</p>
      <input
        type="text"
        name=""
        id=""
        value={todoValue}
        onChange={changehandler}
      />
      <button type="submit" className="btn">
        submit
      </button>
    </form>
  );
};

export default TodoInput;
