import React from "react";
import TaskList from "./components/taskList/taskList";
import TaskInput from "./components/taskInput/taskInput";

function App() {
  return (
    <div className="App">
      <h1 className="app-title">To-Do App</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
