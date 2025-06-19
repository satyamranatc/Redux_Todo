import React from 'react'
import { useSelector } from 'react-redux'

export default function Display() {
  let Task = useSelector((state)=>state.Task);
  console.log(Task);
  return (
    <div>
      
    </div>
  )
}
