import React from 'react'
import s from './style.module.css'
import { useSelector } from 'react-redux'
import User from '../User'

export default function UsersList() {
    const users = useSelector(({users}) => users)
  return (

    <div className={s.users}>
        {
            users.map(user => <User key={user.id} {...user} />)
        }
    </div>
  )
}
