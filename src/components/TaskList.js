import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <section className="task-list">
      <ul id="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </section>
  );
};

export default TaskList;
