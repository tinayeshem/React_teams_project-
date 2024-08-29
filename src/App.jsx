import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import { DropDown } from './components/DropDown'      
import CollapseList from './components/CollapseList' 
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from './pages/Home'
import Teams from './pages/Teams'

  


function App() {  

      return (      
      
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/Teams" element={<Teams />} />
            </Routes>
               
      );

  }


export default App
