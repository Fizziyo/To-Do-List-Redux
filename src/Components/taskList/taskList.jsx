import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../../store/taskActions/taskActions";
import "./taskList.css";

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  // Delete task
  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  // toggle task completion state
  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
  };

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task">
          <div>
            <input
              type="checkbox"
              checked={task.completed}
              className="task-completed-radio"
              onChange={() => handleToggleTask(task.id)}></input>
            <span className={task.completed ? "completed" : ""}>
              {task.text}
            </span>
          </div>
          <button
            className="delete-button"
            onClick={() => handleDeleteTask(task.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
