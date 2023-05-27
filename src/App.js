import React from 'react';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import  Header  from './Components/Header';
import Feedbackdatails from './Components/Feedbackdatails';
import Feedbackedit from './Components/Feedbackedit';
import Roadmap from './Components/Roadmap';
import Hompage from './Components/Hompage';
import './App.css';
// import Navigation from './Components/Navigation';




function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<> <Header/> <Hompage/></>}/>
    <Route path='/Home' element={<Hompage/>}/>
    <Route path='/Feedbackdetails' element={<Feedbackdatails/>}/>
    <Route path='/Feedbackedit' element={<Feedbackedit/>}/>
    <Route path='/Roadmap' element={ <Roadmap/>}/>
   

    </Routes>
    </BrowserRouter>

  
      {/* 
      
       */}
      
      

    </div>
  );
}

export default App;
