import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";


class BotsPage extends React.Component {



  state = {
    botList: [],
    myBots: [],
    myForce: []
  }

  componentDidMount(){

    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots').then(res => res.json()).then(bots => this.setState({botList: bots}))
  }

  enList = (botId) => {

    this.setState({...this.state.myBots.push(botId)})
    
  };

  moreDetails = () => {

    console.log("hello")

  }

  myForce = (bot) => {
    this.setState({myForce: [...this.state.myForce, bot]})
  }


  render() {
    return (
  <div>
      <div>
        {<YourBotArmy botList={this.state.botList} myBots={this.state.myBots} />}
      </div>

      <div>
        {<BotCollection botList={this.state.botList} enList={this.enList} myBots={this.state.myBots} myForce={this.myForce}/> }
      </div>
  </div>
    );
  }

}

export default BotsPage;
