import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/taskActions/taskActions";
import "./taskInput.css";

function TaskInput() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  // Add task on pressing enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  // Add task to the store
  const handleAddTask = () => {
    if (text.trim() !== "") {
      dispatch(addTask(text));
      setText("");
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Add your task"
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
}

export default TaskInput;
