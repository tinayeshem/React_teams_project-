import React, {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/DropDown.css'



export const DropDown = () => {
   const navigate = useNavigate(); 

  const [option, setOption] = useState("Please pick a team");

  function setNone() {
    setOption("None");
    navigate('/', { state: { option: "None" } });   
  }
  function setA() {
    setOption("Team A");
    navigate('/', { state: { option: "Team A" } });
  }
  function setB() {
    setOption("Team B");
    navigate('/', { state: { option: "Team B" } });
  }
  function setC() {
    setOption("Team C");
    navigate('/', { state: { option: "Team C" } });
  }


  return (
    <div className='my-dropdown'>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {option}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick ={setNone}>None</Dropdown.Item>
              <Dropdown.Item onClick={setA}>Team A</Dropdown.Item>
              <Dropdown.Item onClick={setB}>Team B</Dropdown.Item>
              <Dropdown.Item onClick={setC}>Team C</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

    </div>
  )
}


