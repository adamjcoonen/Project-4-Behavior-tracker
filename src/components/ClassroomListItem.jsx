import React from 'react';
import { Link } from 'react-router-dom';
import ClassroomCard from '../components/ClassroomCard'

function ClassroomListItem(props) {
    
    
    return (
        <>
        
    
       

        <ClassroomCard name={props.name} />
        
    

    <button onClick={(e)  => props.handleDeleteClass(props.id)}>
     Delete </button>
                        
   
    </>
     )


}


export default ClassroomListItem;