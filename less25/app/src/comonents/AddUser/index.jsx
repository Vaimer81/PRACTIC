import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { addAction, clearAction } from '../../store/reducer/userReducer'

export default function AddUser() {

    const dispatch = useDispatch()
    
    const onSubmit = event => {
        event.preventDefault()
        const {name, lastname, age, gender} = event.target
        const user = {
            name: name.value,
            lastname: lastname.value,
            age: +age.value,
            gender: gender.value
        } 
        dispatch(addAction(user));
        event.target.reset()
    }
  return (
    <form onSubmit={onSubmit} className={s.form}>
        <input type='text' name='name' placeholder='name' />
        <input type='text' name='lastname' placeholder='lastname'/>
        <input type='number' min={0} max={140} name='age' placeholder='age' />
        <select defaultValue={-1}name='gender' >
            <option disabled value={-1}>Выберите пол</option>
            <option value='man'>Male</option>
            <option value='frau'>Female</option>
        </select>
        <button>Добавить</button>
        <button type='button' onClick={() => dispatch(clearAction())}>Очистить</button>
    </form>

    
  )
}
