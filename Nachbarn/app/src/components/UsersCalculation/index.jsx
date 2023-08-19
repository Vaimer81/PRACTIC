import React from 'react'
import s from './style.module.css'

export default function UsersCalculation({usersList}) {
    /* 13. Добавить расчет среднего возраста */
    const sum = usersList.reduce((acc, {age}) => acc + +age, 0)
    // -------------------------------------

    // 14. Добавить расчет макс. и мин. возраста польз.(не польз. Math-max и Math-min!!!!)

    

  return (
    <div className={s.container}>
        <p>
            Всего пользователей: {usersList.length}
        </p>
    {/* 13. Добавить расчет среднего возраста */}
        <p>Средний возраст: {Math.round(sum / usersList.length)}</p>
    {/* ----------------------------------     */}
    </div>
  )
}