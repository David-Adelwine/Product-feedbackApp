import React from 'react'
import "../App.css"
import arrowUp from '../Assets/shared/icon-arrow-up.svg';

const Cards = (props) => {
  return (
    <div className='Card--elements'>
      <section className='inner--card'>
      <h3 className='card--header'>{props.title}</h3>
      <p className='card--description'>{props.description}</p>
      <span className='faintbg--header'>{props.category}</span>
      </section>
      <div className='card--votes '>
      <img className='Upvotesbtn' src={arrowUp} alt='^'/>
      <span className='upvotes'>{props.upvotes}</span>
      </div>
     
    </div>
  )
}

export default Cards