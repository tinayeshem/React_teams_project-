import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



function Navbar(){

    return(
        
        <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand text-dark" href="#">MyReactProject</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to ="/" className="nav-link active text-dark" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ="/Teams" className="nav-link text-dark" >Teams</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
        
    

    );



}

export default Navbar