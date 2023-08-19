import React from 'react'
import src from './media/lamp.png'
import s from './style.module.css'
import Container from '../UI/Container'

export default function Main() {
  return (
    <div className={s.main}>        
    <Container className={s.container}>
      <div className={s.info}>
        <h1>Светильники</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam, tenetur ipsa tempora libero autem, quisquam praesentium tempore et mollitia vel magnam nulla accusamus iste commodi quaerat beatae illo ad? </p>       
        <a href=''>Подробнее</a> 
        </div>
        <img src={src} alt='lamp' />         
    </Container>    
    </div>
  )
}