import React from 'react'
import s from './style.module.css'

export default function AddUser({addUser}) {

    function handler(event) {
        event.preventDefault()
        const {first_name, last_name, age, avatar}=event.target
        const obj = {
            first_name: first_name.value,
            last_name: last_name.value,
            age: age.value,
            avatar: avatar.value,            
        }
        addUser(obj)
        event.target.reset()
    }
    
  return (    
        <form onSubmit={handler} className={s.form}>
            <div className={s.inputs}>
               <input type="text" placeholder='first_name' name='first_name'/>
               <input type="text" placeholder='last_name' name='last_name'/>
               <input type="number" placeholder='age' name='age'/>
               <input type="text" placeholder='avatar' name='avatar'/>
            </div>
            <button>Добавить</button>

        </form>
    
  )
}