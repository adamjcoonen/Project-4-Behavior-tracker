import React from 'react';
import { Link } from 'react-router-dom';
import ClassroomCard from '../components/ClassroomCard'

function ClassroomListItem(props) {
    
    
    return (
        <>
        
    
       

        <ClassroomCard name={props.name} />
        
    

    <button onClick={(e)  => props.handleDeleteClass(props.id)}>
     Delete </button>
                        
     <Link
          className='btn btn-xs btn-info'
          to={{
          pathname: '/ClassroomDetails',
          state: {
              location: props.location,
              id: props.id,
              name: props.name}
          }}>Details</Link>
    </>
     )


}


export default ClassroomListItem;