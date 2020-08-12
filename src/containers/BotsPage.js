import React from "react";
import BotCollection from "../containers/BotCollection";
import YourBotArmy from "../containers/YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one

  render() {
    return (
      <div>
        { <YourBotArmy botArmy={this.props.botArmy} updateArmy={this.props.updateArmy}/>}
        { <BotCollection bots={this.props.bots} updateArmy={this.props.updateArmy}/>}
      </div>
    );
  }

}

export default BotsPage;
