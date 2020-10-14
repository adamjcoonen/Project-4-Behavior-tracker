import React from "react";
import ClassButton from '../components/ClassCard'
import AddClass from '../pages/AddClass'
import { Component } from 'react';
//this will diplay the current classes that the logged in user(teacher) has

function UserDisplay(props) {
    let teach = props.user ?
    <span class="eacher-home"> Welcome {props.user.name} 
        <ClassButton />
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