import React from 'react';
import '../assets/styles/Card.css';

function Card(props) {
    return (
        <div className="card" onClick={props.onClick} style={{ cursor: 'pointer' }}  >
            <img 
                src= 'https://img.icons8.com/?size=100&id=2yC9SZKcXDdX&format=png&color=000000'
                alt="Avatar" 
                className="card-img"
            />
            <div className="card-container">
                <h4><b>{props.name}</b></h4>
                <p>{props.spec}</p>
                <p>{props.team}</p>
            </div>
        </div>
    );
}

export default Card;