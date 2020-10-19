import React from 'react';
import { Link } from 'react-router-dom';
import ClassroomCard from '../components/ClassroomCard'

function ClassroomListItem(props) {
    return (
        <ClassroomCard  classrooms={props.classrooms}
                        handleDeleteClass={props.handleDeleteClass}    />
    );
}

export default ClassroomListItem;