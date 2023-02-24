import { useState } from "react";
import TodoBody from "./components/TodoBody";
import TodoInput from "./components/TodoInput";

function App() {
  const [todoState, setTodoState] = useState([]);

  const gottenTodo = (data) => {
    setTodoState((prev) => [data, ...prev]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header">Todo App</h1>
      </header>
      <TodoInput todoValue={gottenTodo} />
      <TodoBody todo={todoState} />
    </div>
  );
}

export default App;
