import React from 'react'
import Students from './Students';
import {  useSelector } from "react-redux"


//if a component returns JSX it is a functional component. 
// No JSX means it's just a function
function StudentContainer(props) {
    const students = useSelector(state => state.students)
    return (
        <div>
            <h1>Student Container</h1>
            {students.map((student) => (
                <Students students ={student}/>
            ))}
           
        </div>
    )
}

export default StudentContainer
