import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CollapseList from '../components/CollapseList';
import { MyContext } from '../components/MyContext';  // Import the context
import '../assets/styles/Team.css'

function Teams() {
  const dev = localStorage.getItem('devs');  // Access context value
  const devsArray = dev ? JSON.parse(dev) : [];  

  const resultA = devsArray.filter((team) =>  team.Team == "Team A").map((i)=>i.name);
  const resultB = devsArray.filter((team) =>  team.Team == "Team B").map((i)=>i.name);
  const resultC = devsArray.filter((team) =>  team.Team == "Team C").map((i)=>i.name);
  

  return (
    <>  
      <div className ="aboutPage">
        <Navbar />
        <div className="containerTeam">
          {/* Render CollapseList for different teams */}
          <CollapseList  teamName={"Team A"}  teamMembers = {resultA.join("\n")} />
          <CollapseList teamName={"Team B"} teamMembers = {resultB.join("\n")} />
          <CollapseList teamName={"Team C"} teamMembers = {resultC.join("\n")}/>
        </div>
      </div>
    </>
  );
}

export default Teams;
