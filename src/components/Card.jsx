import React from "react"
import './Card.css';



function Card(){

    return(
    
            <div class="card">
            <img src="img_avatar.png" alt="Avatar" style="width:50%"/>
            <div class="container">
                <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p>
            </div>
            </div>
    
    );


}


export default Card
