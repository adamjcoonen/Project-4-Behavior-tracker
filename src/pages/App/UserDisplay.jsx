import React from "react";
import AddClassroom from '../../components/AddClassroom'
import ClassroomListItem from '../../components/ClassroomListItem'
//this will diplay the current classrooms that the logged in user(teacher) has

function UserDisplay(props) {
    let teach = props.user ?
    <span className="teacher-home"> Welcome {props.user.name}
      
      <ul>
       {props.classrooms.map((cl, idx) => (
        <li >
        {console.log(cl._id)}
        <ClassroomListItem
                                location={props.location}
                                name={cl.name}
                                user={cl.user}
                                handleDeleteClass={props.handleDeleteClass}
                                id={cl._id}
                                key={idx}
                                students={props.students}
                            />
                        </li>
            
          
        
        
      ))} 
    </ul>
    
        
        <AddClassroom handleAddClassroom={props.handleAddClassroom}/>
        
    </span>
    :
    <span> Please Log in to use</span>

  return (
    <div className='classroomList'>
      {teach}
      
    </div>
  );
}

export default UserDisplay;