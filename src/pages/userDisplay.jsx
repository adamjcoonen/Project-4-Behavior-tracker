import React from "react";
import ClassCard from '../components/ClassCard'
import AddClass from '../pages/AddClass'
import { Component, Link } from 'react';
//this will diplay the current classes that the logged in user(teacher) has

function UserDisplay(props) {
    let teach = props.user ?
    <span class="eacher-home"> Welcome 
      {props.user.name} 
      
      <ul>
      {props.classRooms.map(cl => (
        <li key={cl.id}>
          <ClassCard  classRooms={cl} />
            
          
        </li>
        
      ))}
    </ul>
    
        
        <AddClass handleAddClassRoom={props.handleAddClassRoom}/>
        
    </span>
    :
    <span> Please Log in to use</span>
  return (
    <div className='classList'>
      {teach}
      
    </div>
  );
}

export default UserDisplay;