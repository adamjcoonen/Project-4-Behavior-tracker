import React from 'react';
import AddStudent from './AddStudent';

function ClassroomDetails(props) {
    return (
        <span className='student-page'>
<div className="Student-list">
    you will see list of students here
</div>
<button className='add-student' handleAddStudent={props.handleAddStudent}>Add New Student</button>
<AddStudent  handleAddStudent={props.handleAddStudent}/>
    </span>
    )

}



export default ClassroomDetails