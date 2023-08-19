import React, { useState } from 'react'
import { users } from './users'
import UserItem from '../UserItem';
import s from './style.module.css'
import AddUser from '../AddUser';
import UsersCalculation from '../UsersCalculation';

export default function UsersContainer() {
    //2.Создать state usersList и пройтись по нему map для каждого пользователя создать параграф с его именем:
    const [usersList, setUsersList] = useState(users)
    // console.log(users);

    // 4. Добавить в UsersContainer ф-цию, которая получает id пользователя и удаляет его из стейка. Передать эту ф-цию через пропсы в UserItem и повесить вызов этой ф-ции при нажатии на кнопку "Удалить":

    const remove  = (delId) => {
      const newArr = usersList.filter(({id}) => id !==delId)
      setUsersList(newArr)
    }   

    // А можно и в одну строчку:

    // const remove_1 = (delId) => setUsersList(usersList.filter(({id}) => id !==delId))

    // --------------------------------------

     // 6. Добавить кнопку + , при нажатии на котрую возраст должен увеличиваться на 1 и уменьшаться на 1

     const incrAge = (incrId) => {
      usersList.find(({id}) => id === incrId).age++
      // Пересобираем массив:
      setUsersList([...usersList])
    }
   //7.Если возраст равен 0 и польз. нажимает на -, то возраст не должен меняться:  
    const decrAge = (incrId) => {
    const target = usersList.find(({id}) => id === incrId)
    if (target.age === 0) {
      return
    }
    target.age--    
      // Пересобираем массив:
      setUsersList([...usersList])
    }
    // -----------------------------------

    // Добавить ф-цию, котрая получает объект и добавляет уго в state. Передать эту ф-цию в AddUser и при отправке формы должна вызываться эта ф-ция и добавлять нового польз. в стейт

    const addUser = (obj) => {
      setUsersList([...usersList, obj])
    }



    //8. Добавить еще одну кнопку обнуления возраста
    const resetAge = (incrId) => {
      const target = usersList.find(({id}) => id === incrId)      
      target.age = 0   
        // Пересобираем массив:
        setUsersList([...usersList])
      }

      //12.Добавить кнопку при нажатии на которую пользователю присваивается случайное значение 

      const setRandomAge = (userId) => {
        const target = usersList.find(({id}) => id === userId)
        target.age = Math.round(Math.random() * 38 + 2)
        setUsersList([...usersList])
      }       

  return (
    
    <div>  
      <AddUser addUser={addUser}/>    
    <div className={s.container}>
        {       

            //для 2-го и 3-го задания:
         usersList.map(item => <UserItem  key={item.id} {...item} remove={remove} incrAge={incrAge} decrAge={decrAge} resetAge={resetAge} setRandomAge={setRandomAge} usersList={usersList}/>)
            //-----------------------------
        }
        </div>
        <UsersCalculation usersList={usersList} />
    </div>
  )
}



