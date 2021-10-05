import React from 'react'
import Cars from './Cars'
import Motocycles from './Motocycles'
import '../../App.css'

export default function Garage(props) {
    return (
        <div className='box'>
            <h1>Garage</h1>
            <Cars mustang={props.mustang}/>
            <Motocycles/>
        </div>
    )
}
