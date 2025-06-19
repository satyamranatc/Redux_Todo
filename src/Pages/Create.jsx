import React from 'react'
import "./Create.css"
import { useDispatch } from 'react-redux';
import { AddTask } from '../TaskSlicer';

export default function Create() {
  const dispatch = useDispatch();
  function handleSubmit(e)
  {
    e.preventDefault();
    let NewTask = {
      TaskName: e.target[0].value,
      TaskDescription: e.target[1].value,
      TaskPriority: e.target[2].value
    }
    console.log(NewTask);
    dispatch(AddTask(NewTask));
  }
  return (
    <div>
      <section>
        <h2>Craete All Tasks From Here</h2>
      </section>


      <section id="FormSection">

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Task Name:' />
          <textarea name="" placeholder='Task Description: '></textarea>
          <p>Task Priority</p>
          <select>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        <button>Add Task</button>
          

        </form>

      </section>


    </div>
  )
}
