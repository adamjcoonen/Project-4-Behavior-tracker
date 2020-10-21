import React from 'react';
import {Link} from 'react-router-dom'


function StudentCard(props){        
    
    return(
<div>
    <h1> {props.name}</h1> <br></br>
    <Link to={{pathname:'/StudentDetails',
    }}
    >Student Details</Link>
    </div>
        )
};

export default StudentCard;