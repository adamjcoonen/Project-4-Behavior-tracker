import React, {useState} from 'react';
import AddStudent from '../../components/AddStudent';
import StudentCard from '../../components/StudentCard'



function ClassroomDetails(props) {

    
    // const inClassStu = props.students.filter( x => props.classrooms.students.includes(x._id));
    let classR = props.location.state.name
    let classId = props.location.state.id
    let currentClass = props.classrooms.filter( filt => filt._id === classId).map(cur => cur.students )

      
      
    
    
    console.log(currentClass)


    return (
      
        <span className='student-page'>
    

        
        <h1> Classroom Name: {classR}</h1>
<div className="Student-list">
<ul>



{props.students.map(std =>  ( 
          
        <li key={std._id}>
        
          <StudentCard 
          key={std._id} 
          name={std.name} />
          
          
        </li>

         ))}
    </ul>
</div>
<AddStudent  handleAddStudent={props.handleAddStudent}
             classId={classId} />
    </span>
    


      )  }
    



export default ClassroomDetails