import React from 'react'
import { useSelector } from 'react-redux'
import '../../App.css'

export default function Motocycles() {
    const kawasaki = useSelector(state => state.kawasaki)
    return (
        <div>
            <h1>Motocyclyes</h1>
            {kawasaki}
        </div>
    )
}
