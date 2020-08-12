import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  


   
  

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.botArmy.map(bot => <BotCard key={bot.id} bot={bot} updateArmy={this.props.updateArmy}/>)}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
