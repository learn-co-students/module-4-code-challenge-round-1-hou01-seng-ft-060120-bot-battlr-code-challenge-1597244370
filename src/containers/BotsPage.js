import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

const url = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  state = {
    bots: [],
    botsArmy: [],
  }
  
  loadBots = () => {
    fetch(url)
      .then(res => res.json())
      .then(bots => this.setState({ bots }))
  }

  componentDidMount() {
    this.loadBots()
  }
    
  addBot = (bot) => {    
      if(!this.state.botsArmy.includes(bot)) {
        return this.setState(myArmy => {
          myArmy.botsArmy.push(bot)
          return myArmy
        })

    }
  }

  removeBot = (bot) => {
      let bots = [...this.state.botsArmy]
      if(bots.indexOf(bot) > -1){
        bots.splice(bots.indexOf(bot), 1)
      }this.setState({
        botsArmy: bots
      })
  }
  
  render() {
    return (
      <div>
        <YourBotArmy botsArmy={this.state.botsArmy} removeBot={this.removeBot}/>
       <BotCollection bots={this.state.bots} addBot={this.addBot}/>
      </div>
    );
  }

}

export default BotsPage;