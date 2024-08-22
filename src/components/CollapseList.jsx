import React from 'react'
import Collapsible from 'react-collapsible';
import '../assets/styles/Collapse.css'

function CollapseList() {
  return (
    <Collapsible   trigger="Click to toggle">
      <p className='text'>This is the content of the collapsible component.</p>
    </Collapsible>
  );
}


export default CollapseList