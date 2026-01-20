import "./FilterTabs.css";

const FilterTabs = ({ activeFilter, onChange }) => {
  const filters = [
    { id: "all", label: "All Tasks" },
    { id: "pending", label: "Pending" },
    { id: "completed", label: "Completed" }
  ];

  return (
    <div className="filter-tabs">
      {filters.map((filter) => (
        <button
          key={filter.id}
          className={`filter-btn ${
            activeFilter === filter.id ? "active" : ""
          }`}
          onClick={() => onChange(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
