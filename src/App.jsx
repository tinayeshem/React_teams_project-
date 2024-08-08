import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import { DropDown } from './components/DropDown'       
  


function App() {  

      return (
      
            <>
            <Navbar/> 
            <DropDown/>
            <div className="container">
               <div className="row">
                  <div className="col-sm">
                     <Card/> 
                     <Card/> 
                     <Card/>
                  </div>
                  <div className="col-sm">
                     <Card/> 
                     <Card/> 
                     <Card/>
                  </div>
                  <div className="col-sm">
                     <Card/>
                     <Card/>
                     <Card/>
                  </div>
               
               
               </div>
                
                
                               
            </div>


      </>    
        
      );

  }


export default App
