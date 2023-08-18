import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { removeAction } from '../../store/reducer/userReducer'

export default function User({id, name, lastname, age, gender}) {
    const dispatch = useDispatch()

    const backgroundColor = gender === 'frau' ? '#fd79a8' : '#0984e3' 

  return (
    <div style={{backgroundColor}} className={s.item}>
        <p>{name}</p>
        <p>{lastname}</p>
        <p>{age}</p>        
        <button onClick={() => dispatch(removeAction(id))}>Удалить</button>      
    </div>
  )
}

