import React from 'react'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    
    <>    
         <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>       
                <Navbar></Navbar> 
        </head>


        <body>

            <div className= 'container'>
                    <div className='row'>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div> 
                    <div className='row'>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div> 
                    <div className='row'>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div> 
                    <div className='row'>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>                    
                
            </div>
                
        </body>    
    
    </>
           




    
  )
}

export default Home