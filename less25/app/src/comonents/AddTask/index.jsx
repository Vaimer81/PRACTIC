import React from 'react'
import s from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addAction, clearAction } from '../../store/reducer/tasksReducer'

export default function AddTask() {

    const dispatch = useDispatch()
    const users = useSelector(({users}) => users)

   
    const onSubmit = event => {
        event.preventDefault()
        const title = event.target.title.value   
        const userId = event.target.userId.value       
        dispatch(addAction({title, userId }));
        event.target.reset()
    }

  return (
   <form onSubmit={onSubmit}className={s.form}>
       <input type='text' name='title' placeholder='title'/>
       <select name={'userId'}> 
         {
            users.map(({id, name, lastname}) =>
            <option key={id} value={id}>{`${name} ${lastname}`}</option>
            )
         }              
       </select>
       <button>Добавить</button>
       <button type='button' onClick={() => dispatch(clearAction())}>Очистить</button>
   </form>
  )
}
