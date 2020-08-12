import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs';

class BotCollection extends React.Component {
  //your code here
  state = {
	  clicked: false,
	  oneBot: [],
  }

  handleClick = (bot) => {
	  this.setState({clicked: true})
	this.setState({oneBot: bot})
  }

  handleBack = () => {
	  this.setState({clicked: false})
  }

  render(){
  	return (
  	  <div className="ui four column grid">
			{this.state.clicked ? (<div>
				<BotSpecs bot={this.state.oneBot} handleChooseBot={this.props.handleChooseBot} handleBack={this.handleBack}/>
			</div>) : (
    		<div className="row">
			
    		  {this.props.bots.map(bot => (
				  <BotCard bot={bot} key={bot.id} handleChooseBot={this.props.handleChooseBot} handleClick={this.handleClick}/>
			  ))}
    		  Collection of all bots
    		</div>)}
  	  </div>
  	);
  }

};

export default BotCollection;
