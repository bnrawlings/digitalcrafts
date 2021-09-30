import React, { Component } from 'react'

export default class ClassComponents extends Component {
    state = {
        counter: 0,
        studentName: "Britty",
    };
    IncreseCounter =() => {
        this.setState({counter : this.state.counter + 1});
    }
    DecreseCounter = () =>{
        this.setState({counter : this.state.counter - 1});
    }
    changeStudent = () =>{
        let name = "DannyBoy"
        this.setState({studentName : name});
    }
    render() {
        return (
            <div>
                <p>Class Counter</p>
                <p>Student Name: {this.state.studentName}</p>
                <p>counter is: {this.state.counter}</p>
                <button onClick={this.IncreseCounter}>Increase</button>
                <button onClick={this.DecreseCounter}>Decrease</button>
                <button onClick={this.changeStudent}>Change the Student</button>
            </div>
        )
    }
}
