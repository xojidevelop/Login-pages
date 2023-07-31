import React from 'react'
import './App.css';
import Login from './pages/Login/Login';
import Crossball from './pages/Crossball/Crossball';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <div className="container">
          <Routes>
            <Route index element={<Login/>}/>
            <Route path='/crossball' element={<Crossball/>}/>
          </Routes>
        </div>
    </div>
  );
}

export default App;
