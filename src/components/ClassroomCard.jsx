import React, { Component } from 'react';
import {Link} from 'react-router-dom'


function ClassCard(props){        
    
    return(
<div>
    <h1> {props.classrooms.name}</h1> <br></br>
    <Link to={{pathname:'/ClassDetails', state: {classroom: props.classrooms , id: props.id}
    }}
    >Class Details</Link>
    </div>
        )
};

export default ClassCard;