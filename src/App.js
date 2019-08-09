//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import car from "./car.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    car,
    clickedCar: [],
    score: 0
  };

//when you click on a card ... the car is taken out of the array
  imageClick = event => {
    const currentCar = event.target.alt;
    const CarAlreadyClicked =
      this.state.clickedCar.indexOf(currentCar) > -1;

//if you click on a car that has already been selected, the game is reset and cards reordered
    if (CarAlreadyClicked) {
      this.setState({
        car: this.state.car.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedCar: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available car, your score is increased and cards reordered
    } else {
      this.setState(
        {
          car: this.state.car.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedCar: this.state.clickedCar.concat(
            currentCar
          ),
          score: this.state.score + 1
        },
//if you get all 12 cars corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              car: this.state.car.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedCar: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.car.map(car => (
            <FriendCard
              imageClick={this.imageClick}
              id={car.id}
              key={car.id}
              image={car.image}
            />
          ))}
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}
export default App;