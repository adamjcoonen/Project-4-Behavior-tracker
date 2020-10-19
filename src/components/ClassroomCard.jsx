import React, { Component } from 'react';
import {Link} from 'react-router-dom'


function ClassroomCard(props){        
    
    return(
<div>
    <h1> {props.classrooms.name}</h1> <br></br>

    <button  onClick{() => props.handleDeleteClass(props.classrooms._id)}> Delete </button>
    </div>
        )
};

export default ClassroomCard;