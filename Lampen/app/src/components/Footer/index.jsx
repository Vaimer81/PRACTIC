import React from 'react'
import SocialMedia from '../SocialMedia'
import s from './style.module.css'
import Container from '../UI/Container'

export default function Footer() {
  return (
    <Container className={s.footer}>
        <SocialMedia />    
    </Container>
  )
}