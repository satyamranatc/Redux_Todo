import React from 'react'
import { addTask } from '../TaskSlicer';
import { useDispatch } from 'react-redux';

export default function Create() {
    let dispatch = useDispatch()

    const handleTaskSubmit = (e) => {
        e.preventDefault();
        let NewTask = {
            name: e.target[0].value,
            des: e.target[1].value,
            caregory: e.target[2].value,
            priorty: e.target[3].value
        }
        console.log(NewTask);
        dispatch(addTask(NewTask))
    }

  return (
    <div>
        <section className='text-center'>
            <h1 className='text-2xl' >Create Your Tasks: </h1>
        </section>

        <section className='mt-4 p-2 m-auto'>

            <form onSubmit={handleTaskSubmit}>
                <label>
                    Task Name:
                    <input className='p-2' type="text" placeholder='Enter your task' />
                </label>
                <label>
                    Task Des:
                    <textarea className='p-2' ></textarea>
                </label>
                <label>
                    Task Caregory:
                    <select>
                        <optgroup label="Daily">
                            <option>Home</option>
                            <option>Gym</option>
                            <option>Study</option>
                        </optgroup>
                        <optgroup label="Work">
                            <option>Meating</option>
                            <option>Code</option>
                            <option>Project</option>
                        </optgroup>
                    </select>
                </label>
                <label>
                    Task Priorty:
                    <select>
                        <option>Low</option>
                        <option>Modratre</option>
                        <option>High</option>
                    </select>
                </label>
                <button className='p-2 bg-blue-600 text-white'>Submit</button>
            </form>

        </section>
    </div>
  )
}
