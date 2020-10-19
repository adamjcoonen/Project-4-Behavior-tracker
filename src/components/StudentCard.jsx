import React, { Component } from 'react';
import {Link} from 'react-router-dom'


function StudentCard(props){        
    
    return(
<div>
    <h1> {props.student}</h1> <br></br>
    <Link to={{pathname:'/StudentDetails', state: {student: props.student}
    }}
    >Student Details</Link>
    </div>
        )
};

export default StudentCard;