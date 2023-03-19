import React from 'react'
import style from './Card.module.scss'

const Card = ({children, cardClass}) => {
  return (
    <div className={`${style.card} ${cardClass}`}>
        {children}
    </div>
  )
}

export default Card