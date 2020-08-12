import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
    		      {this.props.myBots.map(bot => <BotCard bot={bot} key={bot.id} enList={this.props.enList} /> )}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
