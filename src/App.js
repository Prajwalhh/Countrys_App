import { useState, useEffect } from 'react';
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Inky from './Components/Inky';
import Data from './Components/Data';




function App() {

  return(
    <div>
     
      <Router>
        <Routes>
          <Route path='/' element={<Inky/>} />
           <Route path='/about/:cca2' element={<Data />} />
        </Routes>
      </Router>
    </div>
  );
  

}

export default App;
