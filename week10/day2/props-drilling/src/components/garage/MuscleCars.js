import React from 'react'
import '../../App.css'

export default function MuscleCars(props) {
    return (
        <div className='box'>
            <h1>MuscleCars</h1>
            <h2>{props.mustang}</h2>
        </div>
    )
}
