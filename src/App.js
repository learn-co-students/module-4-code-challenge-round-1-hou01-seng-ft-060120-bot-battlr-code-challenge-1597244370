import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      bots: [],
      enlisted: []
    }
  }

  componentDidMount() {
    this.fetchBots()
  }

  fetchBots() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(bots => this.setState({bots: bots}))
  }

  enlist = (bot) => {
    if (this.state.enlisted.includes(bot)) {
      console.log('Sorry, this robot is already on your army and I wont let you add it again because I need to pass this code challenge, baby')
    } else {
      this.setState({
        enlisted: [...this.state.enlisted, bot]
      })
    }
  }

  remove = (mybot) => {
    let oldEnlistedArray = this.state.enlisted
    let index = oldEnlistedArray.indexOf(mybot)
    if (index > -1) {
      oldEnlistedArray.splice(index, 1);
    }
    this.setState({
      enlisted: oldEnlistedArray
    })
    console.log(mybot)
    console.log(this.state.enlisted)
    this.fetchBots()
  }
  render() {
    return (
      <div className="App">
        <BotsPage 
        bots={this.state.bots}
        enlist={this.enlist}
        enlistedBots={this.state.enlisted}
        remove={this.remove}/>
      </div>
    );
  }
}

export default App;
