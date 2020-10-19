import React, { Component } from 'react';
import {Link} from 'react-router-dom'


function ClassCard(props){        
    
    return(
<div>
    <h1> {props.classrooms}</h1> <br></br>

    <Link to={{pathname:'/ClassroomDetails', state: {classrooms: props.classrooms}
    }}
    >Class Details</Link>
    </div>
        )
};

export default ClassCard;