import React from 'react';
import AddStudent from '../../components/AddStudent';
import StudentCard from '../../components/StudentCard'



function ClassroomDetails(props) {

    
    console.log(props)
    // const inClassStu = props.students.filter( x => props.classrooms.students.includes(x._id));
    let classR = props.location.state.name
    
    return (
      
        <span className='student-page'>
    

        
        <h1> Classroom Name: {classR}</h1>
<div className="Student-list">
<ul>
         {props.students.map( (std, id) => ( 
            
        <li  key={std.id} >
        
          <StudentCard  students={std.name}  />
          
          
        </li>

         ))}
    </ul>
</div>
<AddStudent  handleAddStudent={props.handleAddStudent}
             classId={props.classId} />
    </span>
    


)}



export default ClassroomDetails