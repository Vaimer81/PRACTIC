import React from 'react'
import { useSelector } from 'react-redux'
import Task from '../Task'

export default function TasksList() {

  const tasks = useSelector(({tasks}) => tasks)
  
  return (
    <div>
      {
        tasks.map(task => <Task key={task.id} {...task} />)
      }
    </div>
  )
}
