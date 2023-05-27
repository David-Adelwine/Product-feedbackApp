import React from 'react';
import  Header  from './Components/Header';
// import Feedbackdatails from './Components/Feedbackdatails';
// import Feedbackedit from './Components/Feedbackedit';
// import Roadmap from './Components/Roadmap';
import Hompage from './Components/Hompage';
// import './App.css';
import Navigation from './Components/Navigation';




function App() {
  return (
    <div className="App">
      
      <Header/>
       <Hompage/> 
      {/* <Feedbackdatails/>
      <Feedbackedit/>
      <Roadmap/>  */}
      
      

    </div>
  );
}

export default App;
