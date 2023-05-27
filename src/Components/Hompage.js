import React from 'react'
import '../App.css'
import Illustration from '../Assets/suggestions/illustration-empty.svg'

const Hompage = () => {
  return (
    <div className="homepage">
     <img src={Illustration} alt="" srcset="" className='homeImg' />
      <h3 className='homeheader'>There is no feedback yet</h3>
      <p className='hometext'>Got a suggestion? Found a bug that needs to be squashed?
        <br/> We love hearing about new ideas to improve our app.</p>
      <button className='homebtn'>+ Add Feedback</button>
      </div>
  )
}

export default Hompage