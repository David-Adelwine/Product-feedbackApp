import React from 'react';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import  Header  from './Components/Header';
import Feedbackdatails from './pages/Feedbackdatails';
import Feedbackedit from './pages/Feedbackedit';
import Roadmap from './pages/Roadmap';
import Hompage from './pages/Hompage';
import './App.css';
// import Navigation from './Components/Navigation';
import data from './data';




function App() {
console.log(data)
  
  return (
    <div className="App">
    <BrowserRouter>
    {/* <nav>
    <Link  to="/" className='card-items  top-listed' >All</Link>     
    </nav> */}
    <Routes>
 <Route path='/' element={<> <Header/> <Hompage/></>}/>
   {/* <Route path='/Home' element={<Hompage/>}/> */}
    <Route path='/Feedbackdetails' element={<Feedbackdatails/>}/>
    <Route path='/Feedbackedit' element={<Feedbackedit/>}/>
    <Route path='/Roadmap' element={ <Roadmap/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
