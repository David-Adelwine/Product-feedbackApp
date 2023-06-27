import React from 'react';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import  Header  from './Components/Header';
import Feedbackdatails from './pages/Feedbackdatails';
import Feedbackedit from './pages/Feedbackedit';
import Hompage from './pages/Hompage';
import './App.css';
import FeedbackDetail from './pages/FeedbackDetail';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
 <Route path='/' element={<> <Header/> <Hompage/></>}/>
    <Route path='/Feedbackdetails' element={<Feedbackdatails/>}/>
    <Route path='/Feedbackedit' element={<Feedbackedit/>}/>
    <Route path='/FeedbackDetail' element={ <FeedbackDetail/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;



