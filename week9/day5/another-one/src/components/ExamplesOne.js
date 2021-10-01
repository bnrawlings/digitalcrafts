import React, { useState } from 'react';
import ListOfNames from './ListOfNames'

export default function ExampleOne(){
    const [userName, setuserName] = useState([])
    const [listOfNames, setlistOfNames] = useState("")
    
    return(
        <div>
            <label>Enter your name:</label>
            <input OnChange={(e) =>
                setuserName(e.target.value)
                }
                type="text"
                placeholder="Name"
            />
            <button OnClick={()=> setlistOfNames(...listOfNames, userName)}>
                Submit
            </button>
            <ListOfNames list={userName}/>
        </div>
    )
}