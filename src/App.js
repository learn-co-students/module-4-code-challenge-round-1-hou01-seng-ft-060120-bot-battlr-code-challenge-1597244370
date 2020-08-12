import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {

  state = {
    bots: [],
    botArmy: []
   
  }

  getBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(bots => this.setState({bots}))
  }

  componentDidMount() {
    this.getBots()
  }

  updateArmy = (robut) => {
    if (!robut.inArmy === true) {
   const bots = this.state.bots.map(bot => {
     const newBot = {...bot}
     if (robut.id === bot.id) {
       newBot.inArmy = true
     }
     return newBot
   })
   this.setState({bots})
   console.log(bots)
  }
  else {
    const bots = this.state.bots.map(bot => {
     const newBot = {...bot}
     if (robut.id === bot.id) {
       newBot.inArmy = false
     }
     return newBot
    })
    this.setState({bots})
    console.log(bots)
  }
  let botArmy = this.state.bots.filter(bot => bot.inArmy === !true ) 
  console.log(botArmy)
  this.setState({botArmy})
  }

  render() {
    return (
      <div className="App">
        <BotsPage bots={this.state.bots} botArmy={this.state.botArmy} updateArmy={this.updateArmy}/>
      </div>
    );
  }
}

export default App;
