import React from 'react';
import AddStudent from './AddStudent';

function ClassroomDetails(props) {
    let classR = props.location.state.classroom;
    return (
        <span className='student-page'>
    

        
        <h1> Classroom Name {classR.name}</h1>
<div className="Student-list">
        
</div>

<AddStudent  handleAddStudent={props.handleAddStudent}
             classId={props.location.classroom} />
    </span>
    )

}



export default ClassroomDetails