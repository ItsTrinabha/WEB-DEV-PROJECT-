import React, { useMemo, useState } from 'react';

function StudyPlanner() {
  const [taskInput, setTaskInput] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [tasks, setTasks] = useState([]);

  const addTask = (event) => {
    event.preventDefault();
    const cleanTask = taskInput.trim();

    if (!cleanTask) {
      return;
    }

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: cleanTask,
        priority,
        completed: false
      }
    ]);

    setTaskInput('');
    setPriority('Medium');
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const completionStats = useMemo(() => {
    if (tasks.length === 0) {
      return 0;
    }

    const done = tasks.filter((task) => task.completed).length;
    return Math.round((done / tasks.length) * 100);
  }, [tasks]);

  const completedCount = tasks.filter((task) => task.completed).length;
  const pendingCount = tasks.length - completedCount;

  return (
    <section className="planner-section animate-bounce-in">
      <div className="planner-card">
        <div className="planner-topbar">
          <div>
            <h2 className="section-title planner-title">Study Planner Dashboard</h2>
            <p className="section-text planner-subtitle">
              Plan your day, prioritize tasks, and track progress in real-time.
            </p>
          </div>
          <div className="planner-badges">
            <span className="planner-badge">Total: {tasks.length}</span>
            <span className="planner-badge">Done: {completedCount}</span>
            <span className="planner-badge">Pending: {pendingCount}</span>
          </div>
        </div>

        <form className="planner-form" onSubmit={addTask}>
          <input
            value={taskInput}
            onChange={(event) => setTaskInput(event.target.value)}
            placeholder="Add a study task (e.g., Revise React hooks)"
            className="planner-input"
          />

          <select
            value={priority}
            onChange={(event) => setPriority(event.target.value)}
            className="planner-select"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <button className="planner-add-btn" type="submit">+ Add Task</button>
        </form>

        <div className="planner-progress">
          <div className="planner-progress-label">Completion: {completionStats}%</div>
          <div className="planner-progress-track">
            <div className="planner-progress-fill" style={{ width: `${completionStats}%` }} />
          </div>
        </div>

        <ul className="planner-list">
          {tasks.length === 0 && (
            <li className="planner-empty">
              <strong>No tasks yet.</strong> Add your first study task to get started.
            </li>
          )}

          {tasks.map((task) => (
            <li key={task.id} className="planner-item">
              <label className="planner-item-main">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                <span className={task.completed ? 'planner-task completed' : 'planner-task'}>{task.title}</span>
              </label>

              <div className="planner-item-actions">
                <span className={`priority-tag ${task.priority.toLowerCase()}`}>{task.priority}</span>
                <button type="button" className="planner-delete-btn" onClick={() => deleteTask(task.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default StudyPlanner;
