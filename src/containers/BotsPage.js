import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
  }

  componentDidMount() {
    this.getBots()
  }

  getBots() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(bots => this.setState({bots}))
  }

  handleChooseBot = (b) => {
    this.setState({
      bots: this.state.bots.map(bot => {
        const newBot = {...bot};
        if (b.id === newBot.id) {
          newBot.chosen = true;
        }
        return newBot
      })
    })
  }

  render() {
    return (
      <div>
        <div>
          <BotCollection bots={this.state.bots.filter(chosenBot => !chosenBot.chosen)} handleChooseBot={this.handleChooseBot}/>
        </div>
        <div>
          <YourBotArmy myBots={this.state.bots.filter(chosenBot => chosenBot.chosen)}/>
        </div>
      </div>
    );
  }

}

export default BotsPage;
