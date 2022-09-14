import { display } from '@mui/system';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './admin_panel/Login';
import Reset from './admin_panel/Reset';
import Header from './components/Header';


const App=() =>{
  return (
   <Router>
    <div style={{width:"100%",height:"90vh"}}>
   <Routes>
   <Route exact path="/" element={ <Login/> } ></Route>
   <Route exact path="/login" element={ <Login/> } ></Route>
   <Route exact path="/reset" element={ <Reset/> } ></Route>
   </Routes>
   
   
  </div>
   </Router>
  );
};

export default App;
