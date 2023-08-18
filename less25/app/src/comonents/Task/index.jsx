import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeAction } from '../../store/reducer/tasksReducer'

export default function Task({id, title, userId}) {

  const dispatch = useDispatch()  
  const user = useSelector(({users}) => users.find(elem => elem.id === +userId )) 

  const userRow = user === undefined ? "Польозователь удален" : `${user.name} ${user.lastname}`

  return (
    <div>
        <p>{`${title} (${userRow})`}</p>
        <button onClick={() => dispatch(removeAction(id))}>Уалить</button>
    </div>
  )
}


