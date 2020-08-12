import React from "react";
import BotCollection from '../containers/BotCollection'
import YourBotArmy from '../containers/YourBotArmy'

class BotsPage extends React.Component {
 

  render() {
    return (
      <div>
        <YourBotArmy enlisted={this.props.enlisted} handleEnlist={this.props.handleEnlistedArmy}/>
        <BotCollection bots={this.props.bots} handleEnlist={this.props.handleEnlist}/>
      </div>
    );
  }

}

export default BotsPage;
