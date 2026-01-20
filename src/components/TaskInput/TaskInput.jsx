import { useState } from "react";
import "./TaskInput.css";

const TaskInput = ({ onAddTask }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;
    onAddTask(text.trim());
    setText("");
  };

  return (
    <div className="task-input-wrapper">
      <input
        type="text"
        className="task-input"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />

      <button className="add-btn" onClick={handleAdd}>
        <span className="plus">+</span>
        <span>Add</span>
      </button>
    </div>
  );
};

export default TaskInput;
