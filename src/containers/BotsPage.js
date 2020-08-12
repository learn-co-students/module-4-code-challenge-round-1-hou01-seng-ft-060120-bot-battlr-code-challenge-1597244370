import React from "react";
import BotCollection from "./BotCollection.js";
import YourBotArmy from "./YourBotArmy.js";
const url = `https://bot-battler-api.herokuapp.com/api/v1/bots`
class BotsPage extends React.Component {
  constructor(){
    super();
    this.state= {
      bots: [],
      army: [],
      onArmy: false
    }
  }

  
  addBot = () => {
  debugger
}
  //start here with your code for step one
componentDidMount() {
  fetch(`${url}`)
    .then(res => res.json())
    .then(bots => {
      this.setState({
        bots: bots,
        
      })
    })
}
  render() {
    return (
      <div>
        < YourBotArmy army = {this.state.army} addBot = {this.addBot}/>
        < BotCollection bots = {this.state.bots} addBot = {this.addBot}/>
        
      </div>
    );
  }

}

export default BotsPage;
