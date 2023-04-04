import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Forminfo from './Components/Forminfo';
import Display from './Components/Display';
function App() {
  return (
    <div className="App">
       <header className="App-header">
       <Routes>
          <Route path="/" element={<Forminfo/> }/>
          <Route path="Display" element={<Display/>}/>
        </Routes>
       </header>
     </div>
     
  );
}

export default App;
