import { useState } from "react";

const TaskItem = ({ task, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const saveEdit = () => {
    if (!text.trim()) return;
    onEdit(task.id, text.trim());
    setIsEditing(false);
  };

  return (
    <div
      className="task-item"
      style={{
        borderLeftColor: task.completed ? "#2e7d32" : "#0d47a1",
      }}
    >
      <button
        className={`checkbox ${task.completed ? "checked" : ""}`}
        onClick={() => onToggle(task.id)}
      >
        {task.completed && "✓"}
      </button>

      {isEditing ? (
        <input
          className="edit-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && saveEdit()}
          autoFocus
        />
      ) : (
        <span className={`task-text ${task.completed ? "done" : ""}`}>
          {task.text}
        </span>
      )}

      <div className="task-actions">
        {isEditing ? (
          <>
            <button className="action save" onClick={saveEdit}>✓</button>
            <button className="action cancel" onClick={() => setIsEditing(false)}>✕</button>
          </>
        ) : (
          <>
            <button className="action edit" onClick={() => setIsEditing(true)}>✎</button>
            <button className="action delete" onClick={() => onDelete(task.id)}>🗑</button>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
