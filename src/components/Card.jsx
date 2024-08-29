import React from 'react';
import '../assets/styles/Card.css';

function Card(props) {
    return (
        <div className="card">
            <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Avatar" 
                className="card-img"
            />
            <div className="card-container">
                <h4><b>{props.name}</b></h4>
                <p>{props.spec}</p>
            </div>
        </div>
    );
}

export default Card;