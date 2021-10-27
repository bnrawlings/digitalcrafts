import React, { useState  } from 'react';
import { calculateWinner } from '../calculator';
import Board from './Board'
const Game = () => {
    const [ticTacToe, setTicTacToe] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0)
    const [xTurn, setXturn] = useState(true);
    const winner = calculateWinner(ticTacToe[stepNumber]);
    const xORo = xTurn ? "X" : "O";

        //Onclick function thats passed to square
    const handleClick= (i) => {
        const gamepoint = ticTacToe.slice(0, stepNumber + 1);
        const current = gamepoint[stepNumber];
        const squares = [...current];
        //game won or square occupied
        if (winner || squares[i]) return;
        //select a square
        squares[i] = xORo;
        setTicTacToe([...gamepoint, squares]);
        setStepNumber(gamepoint.length);
        setXturn(!xTurn);
    }
    return (
        <div>
            <h1>TIC TAC TOE</h1>
            <Board squares ={ticTacToe} onClick ={handleClick}/>
            <h3>{winner ? "Winner: " + winner : "Next Player" + xORo}</h3>
        </div>
    
        
    )
}
export default Game;