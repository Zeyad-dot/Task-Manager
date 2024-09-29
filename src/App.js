import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";
import MobileHeader from "./components/MobileHeader";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  const [filter, setFilter] = useState("all");
  const [taskInput, setTaskInput] = useState("");
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (taskInput.trim() === "") return;

    const newTask = {
      id: tasks.length + 1,
      taskValue: taskInput,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const updateTask = (id, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <div className={darkMode ? "container dark-theme" : "container"}>
      <Filter setFilter={setFilter} />
      <main>
        <div className="header">
          {isMobile && <MobileHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>}
          <form onSubmit={addTask} className="task-form">
            <input
              type="text"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              placeholder="Add a new task"
              className="task-input"
            />
            <button type="submit" className="add-task-btn">
              Add Task
            </button>
          </form>
          {!isMobile && <button className="dark-mode-btn" onClick={toggleDarkMode}>
              <img
                className="icon"
                src={
                  darkMode
                    ? `${process.env.PUBLIC_URL}/sun.png`
                    : `${process.env.PUBLIC_URL}/moon.png`
                }
                alt="dark mode icon"
              />
            </button>}
        </div>
        <TaskList
          tasks={filteredTasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      </main>
    </div>
  );
};

export default App;
