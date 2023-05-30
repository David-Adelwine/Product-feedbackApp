import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import '../App.css'




 const Header = () => {

  return (
    <div >
      <section className="grid--header">
      <div className="card top-card">
            <div className="container">
              <h4 className='toptext' >Frontend Mentor</h4> 
              <p className='bottomtext'>Feedback Board</p> 
            </div>
      </div>
      <br/>
          <div className="card ">
            <div className='listed'>
            <Link  to="/Roadmap" className='card-items  top-listed' >All</Link>     
                <san className='card-items faintbg'>UI</san>
                <span className='card-items faintbg'>UX</span>
                <span className='card-items faintbg'>Enhancement</span>
                <span className='card-items faintbg'>Bug</span>
                <span className='card-items faintbg feature'>Feature</span>
            </div>
          </div>
          <br/>
          

          <div className="card">

          </div>
          </section>
          <Navigation/>
        
  </div>

  )
}
export default Header
