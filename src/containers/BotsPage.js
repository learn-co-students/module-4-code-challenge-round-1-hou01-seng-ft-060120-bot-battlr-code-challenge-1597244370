import React from "react";
import BotCollection from "../containers/BotCollection"
import YourBotArmy from "../containers/YourBotArmy"


const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'
class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(){
    super()
    this.state = {
      bots: [],
      armyBots: []
    }
  }

  componentDidMount(){
    fetch(API)
    .then(response => response.json())
    .then(bots => {
      let arr = bots.map(bot => {return{...bot, owned: false}})
      this.setState({bots: arr})})
  }

  enlistBot = (bot) => {
    if (!this.state.armyBots.includes(bot)) {
      return this.setState(state => {
        state.armyBots.push(bot)
        return state
    })
  }
  if(this.state.armyBots.includes(bot)) {
    return this.setState(state => {
      state.bots.push(bot)
      return state
  })
  
  }
}



  render() {
    return (
      <div>
        <YourBotArmy enlistBot={this.enlistBot} armyBots={this.state.armyBots}/>
        <BotCollection bots={this.state.bots} enlistBot={this.enlistBot} />
      </div>
    );
  }

}

export default BotsPage;
