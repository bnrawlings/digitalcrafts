import React from 'react';
import { Student, data} from "./CardContainer"



function Card() {
    return (
        <div>
            {data.map(student => (
                <p>{data[0].name} </p>
            ))}
        </div>
    )
}

export default Card
