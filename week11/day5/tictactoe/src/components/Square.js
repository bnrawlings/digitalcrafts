import React from 'react'
import "../../src/square.css"
 const Square = ({value, onClick}) => {
    
    const style = value ? `squares ${value}` : `squares`
    return (
    <button className={style} onClick ={onClick}> 
    {value} 

    </button>
    ) 
};
 export default Square;

