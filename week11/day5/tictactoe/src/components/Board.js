import React from 'react'
import  Square  from './Square';
import "../../src/board.css";
const Board =({squares, onClick}) => (
    
        <div className="board">
           {/* Mapping over each square, then passing
           the square into the square component 
           along with the index */}
            {/* {squares.map((square, i) => (
                <Square key={i} value ={square} onClick ={() => onClick(i)}/>
            ))}; */}
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
            <Square/>
        </div>
    
);
export default Board;
