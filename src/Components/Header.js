import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
// import '../App.css'
import '../Styles/Header.css'



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
            <div className='inner--cards'>
                <div className="card ">
                  <div className='listed'>
                  <Link  to="/Roadmap" className='card-items  top-listed' >All</Link>     
                    <Link to="/" className ='card-items faintbg'>UI</Link> 
                      <Link to="/Feedbackedit" className='card-items faintbg'>UX</Link>
                      <span className='card-items faintbg'>Enhancement</span>
                      <span className='card-items faintbg'>Bug</span>
                      <span className='card-items faintbg feature'>Feature</span>
                  </div>
                </div>
                <br/>
                
              <div className="card lastcard-notresponsive">
                <div className="container">
                    <div className="header">
                        <h2>Roadmap</h2>
                        <ul className="bullet-list">
                          <li className="bullet red">Planned</li>
                          <li className="bullet blue">In-Progress</li>
                          <li className="bullet green">Live</li>
                        </ul>
                    </div>
                    <div className="header">
                            <h2>Views</h2>
                          <ol className="number-list">
                            <li>0</li>
                            <li>0</li>
                            <li>0</li>
                          </ol>
                    </div>
               </div>
             </div>
         </div>
       </section>
                <Navigation/>
              
      </div>

  )
}
export default Header
