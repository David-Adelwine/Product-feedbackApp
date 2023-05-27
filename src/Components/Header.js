import React from 'react'



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
  <div >
    <ul className="listed">
      <li className='card-items top-listed'>All</li>
      <li className='card-items faintbg'>UI</li>
      <li className='card-items faintbg'>UX</li>
      <li className='card-items faintbg'>Enhancement</li>
      <li className='card-items faintbg'>Bug</li>
      <li className='card-items faintbg'>Feature</li>
      
    </ul>
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
 </div>
   
  )
}
export default Header
