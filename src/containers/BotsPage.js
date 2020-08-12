import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

const BOTS_URL = "https://bot-battler-api.herokuapp.com/api/v1/bots";
const defaultView = { display: false, bot: null }

class BotsPage extends React.Component {

  state = {
    bots: [],
    botArmy: [],
    botSpecs: defaultView
  }
  
  componentDidMount() {
    fetch(BOTS_URL)
      .then(res => res.json())
      .then(bots => {
        this.setState({ bots })
      })
  }

  handleBotClick = (bot) => {
    this.setState({
      botSpecs: {
        display: true, 
        bot: bot
      }
    })
  }

  handleBackBtn = () => {
    this.setState({ 
      botSpecs: defaultView
    })
  }

  handleEnlistBtn = (bot) => {
    const botArmy = [ ...this.state.botArmy ]

    if(!botArmy.includes(bot)) {
      botArmy.push(bot);
    } else if(botArmy.includes(bot)) {
      alert(`${bot.name} is already enlisted!`)
    }

    this.setState({ botArmy, botSpecs: defaultView })
  }

  unEnlistBot = (bot) => {
    const botArmy = this.state.botArmy.filter(botty => botty !== bot)
    this.setState({ botArmy })
  }

  render() {
    return (
      <div>
        <YourBotArmy
          botArmy={this.state.botArmy}
          handleBotClick={this.handleBotClick}
          unEnlistBot={this.unEnlistBot}
        />
        { this.state.botSpecs.display
            ?
          <BotSpecs
            bot={this.state.botSpecs.bot}
            handleBackBtn={this.handleBackBtn}
            handleEnlistBtn={this.handleEnlistBtn}
          />
            :
          <BotCollection
            bots={this.state.bots}
            handleBotClick={this.handleBotClick}
          />
        }
      </div>
    );
  }

}

export default BotsPage;
