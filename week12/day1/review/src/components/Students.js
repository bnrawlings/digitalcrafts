import React from 'react'

function Students(props) {
    const {students} = props
    return (
        <div>
            <h1>{students.name}</h1>
        </div>
    )
}

export default Students
