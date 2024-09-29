import React, { useState } from "react";

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.taskValue);

  const handleComplete = () => {
    updateTask(task.id, { ...task, completed: !task.completed });
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveEdit = () =>{
    if (isEditing && newName.trim()) {
      updateTask(task.id, { ...task, taskValue: newName });
    }
    setIsEditing(!isEditing);
  }

  return (
    <li className={`list ${task.completed ? "completed" : ""}`}>
      <div className="text">
        <span className="index">{task.id}- </span>
        {isEditing ? (
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        ) : (
          <span className="task-name">{task.taskValue}</span>
        )}
      </div>
      {isEditing && <span className="edit-mode-text">(edit mode) <button onClick={saveEdit}>save</button></span>}
      <div className="btns">
        <button className="complete-btn" onClick={handleComplete}>
          <i className="far fa-check-circle"></i>
        </button>
        <button className="edit-btn" onClick={handleEdit}>
          <i className="fas fa-edit"></i>
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
