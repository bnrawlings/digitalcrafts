import React, { Component } from 'react'

export default class MyProfile extends Component {
    state = {
    firstName : "Britt",
    lastName : "Rawlings",
    city : "Spring",
    profilePic : "https://media.defense.gov/2013/May/08/2000052121/-1/-1/0/130416-F-FE537-0009.JPG"
    };
    changeCity =() =>{
        let newCity = "Glasglow"
        this.setState({city : newCity});
    }

    render() {
        return <div>
            <h1>Profile</h1>
            <h3>{this.state.firstName}</h3>
            <h3>{this.state.lastName}</h3>
            <h2>{this.state.city}</h2>
            <button onClick={this.changeCity}>Change City</button>
            <img height="600" width="800"src={this.state.profilePic}></img>
        </div>;
      }  
    
}