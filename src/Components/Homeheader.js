import React,{useRef}  from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Header.css'
import Handburger from '../Assets/shared/mobile/icon-hamburger.svg'
// import HandburgerClose from '../Assets/shared/mobile/icon-close.svg'
import HomeNav from './HomeNav'

const Homeheader = () => {

  const HeaderRef = useRef();

  const ShowHeadermenu=()=>{
    HeaderRef.current.classList.toggle("Responsive-Header");
  }


  return (
    <div>
      <section className="grid--header">
            <div className="card top-card ">
                  <div className="container">
                    <h4 className='toptext' >Frontend Mentor</h4> 
                    <p className='bottomtext'>Feedback Board</p> 
                  </div>
            </div>
            <br/>
              
 <img  src={Handburger} onClick={ShowHeadermenu} alt='' width='20px' className='Header-btn Header-Openbtn'/>
                  
            <div className='inner--cards' ref={HeaderRef}>
                <div className="card ">
                  <div className='listed'>
                  <Link  to="/" className='card-items  top-listed' >All</Link>     
                    <Link to="/Hompage" className ='card-items faintbg'>UI</Link> 
                      <Link to="/Hompage" className='card-items faintbg'>UX</Link>
                      <span className='card-items faintbg'>Enhancement</span>
                      <span className='card-items faintbg'>Bug</span>
                      <span className='card-items faintbg feature'>Feature</span>
                  </div>
                </div>
                <br/>
                
              <div className="card  lastcard-notresponsive">
                <div className="container">
                    <div className="header">
                        <h2 className='Roadmap--header'>Roadmap</h2>
                        <ul className="bullet-list">
                          <li className="bullet red">Planned</li>
                          <li className="bullet blue">In-Progress</li>
                          <li className="bullet green">Live</li>
                        </ul>
                    </div>
                    <div className="header">
                            <Link to='/Roadmap'><h2 classname='Go-Roadmap'>Views</h2></Link>
                          <ol className="number-list">
                          <li>{0}</li>
                            <li>{0}</li>
                            <li>{0}</li>
                          </ol>
                    </div>
               </div>
            </div>
         </div>
       </section>
       <HomeNav/> 

    </div>
  )
}

export default Homeheader