import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Stats from "../components/Stats/Stats";
import TaskInput from "../components/TaskInput/TaskInput";
import FilterTabs from "../components/FilterTabs/FilterTab";
import TaskList from "../components/TaskList/TaskList";
import "./TodoApp.css";

const TodoApp = () => {
  // ✅ Load tasks from localStorage safely
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [filter, setFilter] = useState("all");

  // ✅ Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks((prevTasks) => [
      {
        id: Date.now(),
        text,
        completed: false,
      },
      ...prevTasks,
    ]);
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  const editTask = (id, newText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <div className="app">
      <Header />

      <main className="main">
        <div className="card">
          <Stats tasks={tasks} />
          <TaskInput onAddTask={addTask} />
          <FilterTabs activeFilter={filter} onChange={setFilter} />
          <TaskList
            tasks={tasks}
            filter={filter}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onEdit={editTask}
          />
        </div>
      </main>
    </div>
  );
};

export default TodoApp;
