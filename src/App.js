import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {
  state = {
    bots: [],
    enlisted: [],
  }

  handleEnlist = (bot) => {
    if(this.state.bots.includes(bot) && !this.state.enlisted.includes(bot)){
      this.setState({enlisted: [...this.state.enlisted, bot]})
    }
      // } else if(this.state.enlisted.includes(bot)) {
    //   const filtered = this.state.enlisted.filter(enlisted => enlisted.id !== bot.id)
    //     this.setState({enlisted: filtered})
    //   }
  }
  handleEnlistedArmy = (bot) => {
    if(this.state.bots.includes(bot) && !this.state.enlisted.includes(bot)){
      this.setState({enlisted: [...this.state.enlisted, bot]})
    } else if(this.state.enlisted.includes(bot)) {
      const filtered = this.state.enlisted.filter(enlisted => enlisted.id !== bot.id)
        this.setState({enlisted: filtered})
      }
  }
  
  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(json => this.setState({bots:json}))
  }
  render() {
    return (
      <div className="App">
        <BotsPage bots={this.state.bots} 
        enlisted={this.state.enlisted}
        handleEnlist={this.handleEnlist}
        handleEnlistedArmy={this.handleEnlistedArmy}
        />
      </div>
    );
  }
}

export default App;
