import React from 'react';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
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
    <Route path='/' element={ <FeedbackDetail/>}/>
    <Route path='/Hompage' element={<> <Homeheader/> <Hompage/></>}/>
    <Route path='/Feedbackdetails' element={<Feedbackdatails/>}/>
    <Route path='/Feedbackedit/:id' element={<Feedbackedit/>}/>
    <Route path='/ActiveFeedback' element={ <ActiveFeedback/>}/>
    <Route path='/Roadmap' element={ <Roadmap/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;



