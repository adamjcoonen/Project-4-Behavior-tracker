import React from 'react';
import AddStudent from './AddStudent';
import StudentCard from '../components/StudentCard'

function ClassroomDetails(props) {
    let classR = props.location.state.classroom;
    let classId = props.classId;
    return (
        <span className='student-page'>
    

        
        <h1> Classroom Name {classR}</h1>
<div className="Student-list">
<ul>
       {props.students.map(std => ( if std._id
        <li key={std._id}>
          
          <StudentCard  student={std.name} id={std._id} classId={classId}/>
          
          
        </li>
        
      ))} 
    </ul>
</div>
<AddStudent  handleAddStudent={props.handleAddStudent}
             classId={props.classId} />
    </span>
    


)}



export default ClassroomDetails