import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {deleteTask} from '../TaskSlicer'

export default function Display() {
  let dispatch = useDispatch();

  let Task = useSelector((state)=>state.Task);
  console.log(Task);
  
  const getPriorityColor = (priority) => {
    switch(priority?.toLowerCase()) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'modratre': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryIcon = (category) => {
    switch(category?.toLowerCase()) {
      case 'home': return '🏠';
      case 'gym': return '💪';
      case 'study': return '📚';
      case 'meating': return '👥';
      case 'code': return '💻';
      case 'project': return '📋';
      default: return '📝';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">Your Tasks</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-blue-600 mt-4">{Task.length} task{Task.length !== 1 ? 's' : ''} in total</p>
        </div>

        {Task.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📋</div>
            <p className="text-gray-500 text-lg">No tasks yet. Create your first task!</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Task.map((task, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{getCategoryIcon(task.caregory)}</span>
                    <h1 className="text-xl font-bold text-blue-800 line-clamp-2">{task.name}</h1>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(task.priorty)}`}>
                    {task.priorty}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-700 text-sm leading-relaxed">{task.des}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 pt-2 border-t border-blue-50">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {task.caregory}
                    </span>
                    
                    <span className="text-xs font-medium text-white bg-red-500 px-2 py-1 rounded">
                      <button onClick={() => dispatch(deleteTask(index))} >Delete</button>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}