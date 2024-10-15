import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../components/Card';
import '../assets/styles/Home.css';
import { DropDown } from '../components/DropDown';
import { useLocation } from 'react-router-dom';
import Teams from './Teams';  // Import Teams component
import { MyContext } from '../components/MyContext';  // Import the context

function Home() {
  const coders = [
    { name: "John", Speciality: "Nodejs Dev", Team: "None" },
    { name: "Susan", Speciality: "ReactDev", Team: "None" },
    { name: "Bill", Speciality: "Java Dev", Team: "None" },
    { name: "Jane", Speciality: "C++ Dev", Team: "None" },
    { name: "Aulyn", Speciality: "Laravel Dev", Team: "None" },
    { name: "David", Speciality: "Spring Dev", Team: "None" },
    { name: "Loveness", Speciality: "Nodejs Dev", Team: "None" },
    { name: "Moses", Speciality: "Python Dev", Team: "None" },
    { name: "Justice", Speciality: "Java Dev", Team: "None" },
    { name: "Ian", Speciality: "Systems Dev", Team: "None" },
    { name: "Youry", Speciality: "Nodejs Dev", Team: "None" },
    { name: "James", Speciality: "Nodejs Dev", Team: "None" }
  ];

  const [dev, setDevs] = useState(() => {
    const storedDevs = localStorage.getItem('devs');    
    return storedDevs ? JSON.parse(storedDevs) : coders;
  });

  const location = useLocation();
  const { option } = location.state || {};

  const handleTeamChange = (index) => {
    if (!option) return; // Only update if option exists
    setDevs((prevDevs) => {
      const updatedDevs = prevDevs.map((dev, idx) =>
        idx === index ? { ...dev, Team: option } : dev      );
      localStorage.setItem('devs', JSON.stringify(updatedDevs));
      return updatedDevs;
    });
  };

  

  return (
    <MyContext.Provider value={dev}>
      <div className="page">
        <Navbar />
        <DropDown />
        <div className="container">
          <div className='row'>
            {dev.map((card, index) => (
              <div className='col-4' onClick={() => handleTeamChange(index)} key={index}>
                <Card name={card.name} spec={card.Speciality} team={card.Team} />
              </div>
            ))}
          </div>
        </div>
      
      </div>
    </MyContext.Provider>
  );
}

export default Home;
