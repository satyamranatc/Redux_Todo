import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DeleteTask } from '../TaskSlicer.js';
import './AllTask.css' // Import the CSS file

export default function AllTask() {
  const dispatch = useDispatch();
  let tasks = useSelector((state) => state.Task);

  // Helper function to get priority class
  const getPriorityClass = (priority) => {
    if (!priority) return '';
    const lowercasePriority = priority.toLowerCase();
    if (lowercasePriority.includes('high')) return 'priority-high';
    if (lowercasePriority.includes('medium')) return 'priority-medium';
    if (lowercasePriority.includes('low')) return 'priority-low';
    return '';
  };

  return (
    <div className="all-task-container">
      <section className="task-header">
        <h2>All Tasks</h2>
      </section>

      <section id="DataList">
        {tasks.length === 0 ? (
          <div className="empty-state">
            <h3>No tasks yet!</h3>
            <p>Create your first task to get started.</p>
          </div>
        ) : (
          tasks.map((e, id) => (
            <div key={id} className="task-card">
              <h2 className="task-name">{e.TaskName}</h2>
              <p className="task-description">{e.TaskDescription}</p>
              <p className={`task-priority ${getPriorityClass(e.TaskPriority)}`}>
                {e.TaskPriority}
              </p>

              <div className="task-buttons">
                <button className="btn btn-done">Done</button>
                <button className="btn btn-delete" onClick={() => {
                  dispatch(DeleteTask(id))
                }}>Delete</button>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  )
}