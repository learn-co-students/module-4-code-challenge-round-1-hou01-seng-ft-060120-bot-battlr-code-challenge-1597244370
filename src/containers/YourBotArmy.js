import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  state = {
    iAmEnlisted: true
  }

  // clickBot = (clickedBot) => {
  //   if (this.props.enlistedBots.includes(clickedBot)) {
  //     this.props.remove(this.props.bot)
  //   } else {
  //     this.props.enlist(this.props.bot)
  //   }
	//   }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.enlistedBots.map(bot => <BotCard bot={bot} key={bot.id} taken={this.state.iAmEnlisted} remove={this.props.remove} clickBot={this.props.clickBot}/>)}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
