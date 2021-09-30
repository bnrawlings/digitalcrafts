import React , { useState } from 'react';

export default function FunctionalComponents() {
    const [counter, setCounter] = useState(0);
    const [studentName, setStudentName] = useState("Britty");
    return (
        <div>
            <p>Functional Counter</p>
            <p>Counter is: {counter}</p>
            <p>Student name: {studentName}</p>
            <button onClick={() => setCounter(counter + 1)}>Increase</button>
            <button onClick={() => setCounter(counter - 1)}>Decrease</button>
            <button onClick={() => setStudentName("DannyBoy")}>Change The Student</button>
        </div>
    )
}
