import React,{useState} from 'react'

export default function AllTask() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      TaskName: "Complete Project Documentation",
      TaskDescription: "Write comprehensive documentation for the new project including API references and user guides",
      TaskPriority: "High"
    },
    {
      id: 2,
      TaskName: "Team Meeting Preparation",
      TaskDescription: "Prepare agenda and materials for next week's team meeting",
      TaskPriority: "Medium"
    },
    {
      id: 3,
      TaskName: "Code Review",
      TaskDescription: "Review pull requests from team members and provide feedback",
      TaskPriority: "Low"
    },
    {
      id: 4,
      TaskName: "Database Optimization",
      TaskDescription: "Optimize database queries to improve application performance",
      TaskPriority: "High"
    },
    {
      id: 5,
      TaskName: "Update Dependencies",
      TaskDescription: "Update all project dependencies to their latest stable versions",
      TaskPriority: "Medium"
    }
  ])

  return (
    <div>
      <section>
        <h2>All Tasks </h2>
      </section>

      <section id="DataList">

      { tasks.map((e)=>(
          <div>
            <h2>{e.TaskName}</h2>
            <p>{e.TaskDescription}</p>
            <p>{e.TaskPriority}</p>

          </div>
        ))
      }

      </section>
    </div>
  )
}
