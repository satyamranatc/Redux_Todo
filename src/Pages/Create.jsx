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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-4">
        <section className='text-center mb-8'>
            <h1 className='text-3xl font-bold text-blue-800 mb-2'>Create Your Tasks</h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </section>

        <section className='max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 border border-blue-100'>
            <form onSubmit={handleTaskSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-blue-700 mb-2">
                        Task Name
                    </label>
                    <input 
                        className='w-full p-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors' 
                        type="text" 
                        placeholder='Enter your task' 
                    />
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-blue-700 mb-2">
                        Task Description
                    </label>
                    <textarea 
                        className='w-full p-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors h-24 resize-none' 
                        placeholder='Describe your task...'
                    ></textarea>
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-blue-700 mb-2">
                        Task Category
                    </label>
                    <select className="w-full p-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors bg-white">
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
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-blue-700 mb-2">
                        Task Priority
                    </label>
                    <select className="w-full p-3 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors bg-white">
                        <option>Low</option>
                        <option>Modratre</option>
                        <option>High</option>
                    </select>
                </div>
                
                <button className='w-full p-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg'>
                    Create Task
                </button>
            </form>
        </section>
    </div>
  )
}