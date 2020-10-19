import React from "react";
import ClassroomCard from '../../components/ClassroomCard'
import AddClassroom from '../../components/AddClassroom'
import ClassroomListItem from '../../components/ClassroomListItem'
import { Component, Link } from 'react';
//this will diplay the current classrooms that the logged in user(teacher) has

function UserDisplay(props) {
    let teach = props.user ?
    <span className="teacher-home"> Welcome {props.user.name}
      
      <ul>
       {props.classrooms.map((cl, id) => (
        <li >
        <ClassroomListItem
                                classrooms={props.classrooms}
                                key={props.classrooms.id}
                                user={props.user}
                                handleDeleteClass={props.handleDeleteClass}
                            />
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