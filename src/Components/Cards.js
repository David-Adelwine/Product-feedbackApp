import React from 'react'
import "../App.css"

const Cards = (props) => {
  return (
    <div className='Card--elements'>
      <h3 className='card--header'>{props.title}</h3>
      <p className='card--description'>{props.description}</p>
      <span className='faintbg--header'>{props.category}</span>
      <p className='card--votes'>{props.upvotes}</p>
    </div>
  )
}

export default Cards