import React from 'react'
import Collapsible from 'react-collapsible';
import '../assets/styles/Collapse.css'

function CollapseList(props ) {




  return (

    <div className='my-team'>
    <Collapsible   trigger={props.teamName}>
      <pre>{props.teamMembers}</pre>       
    </Collapsible>
    </div>
    
  );
}


export default CollapseList