import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


export const DropDown = () => {
  return (
   <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Teams 
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Team A</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Team B</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Team C</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}


