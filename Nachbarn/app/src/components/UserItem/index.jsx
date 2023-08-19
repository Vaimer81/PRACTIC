import React from 'react'
import s from './style.module.css'


//3.Создать комп. UserItem, который содержит структуру:
// <div>
//     <p>имя</p>
//     <p>Фамилия</p>
// </div> 
//использ. UserItem при генерации карточек пользователей вместо параграфа:

export default function UserItem
({id, first_name, last_name, remove, avatar, age, incrAge, decrAge, resetAge, setRandomAge }) {
  return (
  <div className={s.item}>

      {/* Добавить аватарку пользователя: */}
      <img src={avatar} alt={`${first_name} ${last_name}`}/>
      {/* -------------------- */}
      <p>{first_name} {last_name}</p> 
      <p className={s.age}>{age}</p>     

    {/* 6. Добавить кнопку + , при нажатии на котрую возраст должен увеличиваться на 1 */}
    <div>
      <button onClick={() => incrAge(id)}>+</button>  
      <button onClick={() => decrAge(id)}>-</button> 
    {/* 8. Добавить еще одну кнопку обнуления возраста */}
      <button onClick={() => resetAge(id)}>0</button>
      <button onClick={() => remove(id)}>Удалить</button>    
    </div>   
      <button onClick={() => setRandomAge(id)}>Случайный возраст</button> 
  </div>
  )
}