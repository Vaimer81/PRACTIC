import React from 'react'
import src from './media/logo.png'
import s from './media/style.module.css'
import SocialMedia from '../SocialMedia'
import Container from '../UI/Container'

export default function Nav() {
  return (    
      <Container className={s.nav}>
        <a href='#' className={s.logo}>
          <img src={src} alt='' />
        </a> 
        <SocialMedia /> 
        </Container>        
  )
}