import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'




 const Header = () => {
  return (
    <div className='grid--header ' >
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
                <li className='card-items faintbg'>UI</li>
                <li className='card-items faintbg'>UX</li>
                <li className='card-items faintbg'>Enhancement</li>
                <li className='card-items faintbg'>Bug</li>
                <li className='card-items faintbg'>Feature</li>

            </div>
          </div>
          <br/>
          <div className="card">
            <div className="container">
              <h4><b>John Doe</b></h4> 
              <p>Architect & Engineer</p> 
            </div>
            <br/>
          </div>
          <Navigation/>
  </div>
   
  )
}
export default Header
