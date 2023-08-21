import React from 'react'

import { Action } from './url'
import { Originals } from './url'

import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
        <NavBar/>
         <Banner/>
         <RowPost url={Originals} title="Netflix Originals"/>  
         <RowPost url={Action} title="Action" isSmall/> 
    </div>
  );
}

export default App;