import React from 'react';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
// import  Header  from './Components/Header';
import Feedbackdatails from './pages/Feedbackdatails';
import Feedbackedit from './pages/Feedbackedit';
import Hompage from './pages/Hompage';
import './App.css';
import FeedbackDetail from './pages/FeedbackDetail';
import ActiveFeedback from './pages/ActiveFeedback';
import Roadmap from './pages/Roadmap';
import Homeheader from './Components/Homeheader'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
 <Route path='/' element={<> <Homeheader/> <Hompage/></>}/>
    <Route path='/Feedbackdetails' element={<Feedbackdatails/>}/>
    <Route path='/Feedbackedit' element={<Feedbackedit/>}/>
    <Route path='/FeedbackDetail' element={ <FeedbackDetail/>}/>
    <Route path='/ActiveFeedback' element={ <ActiveFeedback/>}/>
    <Route path='/Roadmap' element={ <Roadmap/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;



