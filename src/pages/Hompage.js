import React from 'react'
import '../Styles/Home.css'
import { Link } from 'react-router-dom'

import Illustration from '../Assets/suggestions/illustration-empty.svg'

const Hompage = () => {
  return (
    <div className="homepage">
      <section className='home--content'>
     <img src={Illustration} alt="" srcset="" className='homeImg' />
      <h3 className='homeheader'>There is no feedback yet</h3>
      <p className='hometext'>Got a suggestion? Found a bug that needs to be squashed?
        <br/> We love hearing about new ideas to improve our app.</p>
     <Link to={'../Feedbackedit'}> <button className='homebtn'>+ Add Feedback</button> </Link>
      </section>
      </div>
  )
}

export default Hompage