import TaskItem from "./TaskItem";
import "./TaskList.css";

const TaskList = ({ tasks, filter, onToggle, onDelete, onEdit }) => {
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true; // all tasks
  });

  if (filteredTasks.length === 0) {
    // Dynamic empty message based on filter
    let emptyTitle = "No tasks found";
    let emptySubtitle = "Add a task to get started!";

    if (filter === "completed") {
      emptyTitle = "No completed tasks found";
      emptySubtitle = "Mark tasks as completed to see them here!";
    } else if (filter === "pending") {
      emptyTitle = "No pending tasks found";
      emptySubtitle = "Add a new task to get started!";
    }

    return (
      <div className="empty-state">
        <p className="empty-title">{emptyTitle}</p>
        <p className="empty-subtitle">{emptySubtitle}</p>
      </div>
    );
  }

  return (
    <div>
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;
