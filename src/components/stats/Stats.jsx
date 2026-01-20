import "./Stats.css";

const Stats = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const pending = total - completed;

  return (
    <div className="stats-container">
      <div className="stat-card total-card">
        <p className="stat-number blue">{total}</p>
        <p className="stat-label">Total</p>
      </div>

      <div className="stat-card completed-card">
        <p className="stat-number green">{completed}</p>
        <p className="stat-label">Completed</p>
      </div>

      <div className="stat-card pending-card">
        <p className="stat-number orange">{pending}</p>
        <p className="stat-label">Pending</p>
      </div>
    </div>
  );
};

export default Stats;
