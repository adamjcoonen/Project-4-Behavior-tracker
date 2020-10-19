import React from "react";
import ClassroomCard from '../../components/ClassroomCard'
import AddClassroom from '../../components/AddClassroom'
import { Component, Link } from 'react';
//this will diplay the current classrooms that the logged in user(teacher) has

function UserDisplay(props) {
    let teach = props.user ?
    <span className="teacher-home"> Welcome {props.user.name}
      
      <ul>
       {props.classrooms.map((cl, idx) => (
        <li key={cl.idx}>
          <ClassroomCard  classrooms={cl.name} />
            
          
        </li>
        
      ))} 
    </ul>
    
        
        <AddClassroom handleAddClassroom={props.handleAddClassroom}/>
        
    </span>
    :
    <span> Please Log in to use</span>

  return (
    <div className='classroomList'>
      {teach}
      
    </div>
  );
}

export default UserDisplay;