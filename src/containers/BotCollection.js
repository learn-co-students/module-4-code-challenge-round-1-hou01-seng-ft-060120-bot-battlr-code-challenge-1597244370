import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";



class BotCollection extends React.Component {
  

	state = {
		currentBot: {}
	}

	setCurrentBot = (bot) => {
		this.setState({
		  currentBot: bot
		});
	  };


	  clearCurrentBot = () => {
		this.setState({
		  currentBot: {}
		});
	  };


	  renderBots = () => {
		if (!this.state.currentBot.id) {
		  return (
			<div className="row">
			  {this.props.botList.map(bot => (
				<BotCard key={bot.id} bot={bot} viewBot={this.setCurrentBot} enList={this.props.enList} />
			  ))}
			</div>
		  );
		} else {
		  return (
			<BotSpecs
			  bot={this.state.currentBot}
			  enlist={this.props.enList}
			  myForce={this.props.myForce}
			  goBack={this.clearCurrentBot}
			/>
		  );
		}
	  };
	

  render(){
	return <div className="ui four column grid">{this.renderBots()}</div>;
  }

};

export default BotCollection;
