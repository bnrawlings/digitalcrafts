import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

export default class BugattiComponents extends Component{
    state = {
          bugatti : {
            make: "Bugatti",
            model: "La voiture noire",
            engine: "v16",
            horsepower: "1500",
            price: "19000000",
           
            image: [
              {
                primary: "https://uncrate.com/p/2021/06/bugatti-la-voiture-noire-1.jpg",
                secondary:
                  "https://www.carscoops.com/wp-content/uploads/2019/03/c64f9e1e-bugatti-la-voiture-noire-roadster-rendering-0-1024x554.jpg",
              },
            ],
            transmission: "7 speed dual clutch",
            topSpeed: [{ US: "261", Metric: "420" }],
          },
          changeImg: true,
          carImg : "https://uncrate.com/p/2021/06/bugatti-la-voiture-noire-1.jpg"
    };
    changeBugattiImg = () => {
        let newImg = this.state.changeImg ? this.state.bugatti.image[0].primary : this.state.bugatti.image[0].secondary;
        this.setState({carImg: newImg, changeImg: !this.state.changeImg})
        
    }
    render() {
        return (
            <div className="bugattiCard">
                <h2>BUGATTI</h2>
                <img height="200" width="300" src={this.state.carImg}/>
                <button onClick={this.changeBugattiImg}>Change Pic</button>
                <p>Make: {this.state.bugatti.make}</p>
                <p>Model: {this.state.bugatti.model}</p>
                <p>Engine: {this.state.bugatti.engine}</p>
                <p>Horsepower:{this.state.bugatti.horsepower}</p>
                <p>Price:{this.state.bugatti.price}</p>
                <p>Transmission: {this.state.bugatti.transmission}</p>
                <p>Top Speed: {this.state.bugatti.topSpeed[0].US} MPH</p>
                
            </div>
        )
}
}