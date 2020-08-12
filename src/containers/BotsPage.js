import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  // clickBot = (bot) => {
		
  // }
  
  // handleClick = () => {
  //   if (this.props.taken === true) {
  //     this.props.remove(this.props.bot)
  //   } else {
  //     this.props.enlist(this.props.bot)
  //   }
  // }

  
  render() {
    return (
      <div>
        <BotCollection 
        bots={this.props.bots}
        enlist={this.props.enlist}
        enlistedBots={this.props.enlistedBots}
        remove={this.props.remove}
        />
        <YourBotArmy
        enlistedBots={this.props.enlistedBots}
        remove={this.props.remove}
        enlist={this.props.enlist}
        />
      </div>
    );
  }

}

export default BotsPage;
