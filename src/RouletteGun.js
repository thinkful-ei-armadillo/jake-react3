import React, { Component } from 'react';

class RouletteGun extends Component {
  static defaultProps = {
    bulletInChamber: 8
  }

  state = {
    chamber: null,
    spinningTheChamber: false
  }

  componentWillUnmount(){
    clearTimeout(this.timeout)
  }

  handleClick = () => {
    this.setState({
      spinningTheChamber: true,
    })
    this.timeout = setTimeout(() => {
      const randomChamber = Math.ceil(Math.random() * 8)
      this.setState({
        chamber: randomChamber,
        spinningTheChamber: false,
      })
    }, 2000);
  }



  gunStatus() {
    const {chamber, spinningTheChamber} = this.state
    const {bulletInChamber} = this.props
    if(spinningTheChamber){
      console.log(chamber, bulletInChamber);
      return 'spinning the chamber and pulling the trigger!'
    } else if (chamber === bulletInChamber){
      return 'BANG!!!'
    } else{
      return "you're safe!"
    }
  }
  

render() {
    return(
      <div className = "Gun">
      <p>{this.gunStatus()}</p>
      <button onClick={this.handleClick}>Pull the trigger!</button>
      </div>
    )
  }
}

export default RouletteGun;