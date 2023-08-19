import React from 'react'
import { list } from './data'
import OfferItem from '../OfferItem'
import s from './style.module.css'
import Container from '../UI/Container'


export default function Offers() {
  return (
    <Container>
        <h2 className={s.h2}>Актуальные спецпредложения</h2>
        <div className={s.offers_list}>
            {
                list.map(item => <OfferItem  key={item.id} {...item} />)
            }
        </div>
    </Container >
  )
}