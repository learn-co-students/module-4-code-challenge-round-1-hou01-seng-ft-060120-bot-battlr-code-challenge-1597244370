import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

	// clickBot = (clickedBot) => {
	// 	if (this.props.enlistedBots.includes(clickedBot)) {
	// 	  console.log('Sorry')
	// 	} else {
	// 	  this.props.enlist(this.props.bot)
	// 	}
	//   }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				{this.props.bots.map(bot => <BotCard bot={bot} key={bot.id} enlist={this.props.enlist} taken={this.props.enlistedBots.includes(bot)} clickBot={this.props.clickBot}/>)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
