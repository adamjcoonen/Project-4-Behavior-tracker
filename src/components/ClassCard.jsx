import React, { Component } from 'react';
import {Link} from 'react-router-dom'


function ClassCard(props){        
    
    return(
<div>
    <h1> {props.classRooms.name}</h1> <br></br>
    <Link to={{pathname:'/ClassDetails', state: {classRoom: props.classRooms}
    }}
    >Class Details</Link>
    </div>
        )
};

export default ClassCard;