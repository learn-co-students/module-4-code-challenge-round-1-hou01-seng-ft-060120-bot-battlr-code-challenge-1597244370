import React from "react";
import BotCollection from "./BotCollection.js";
import YourBotArmy from "./YourBotArmy.js";
import BotSpecs from "../components/BotSpecs.js";

class BotsPage extends React.Component {
	//start here with your code for step one
	state = {
		bots: "",
		army: "",
		cardCliked: false,
		botSpecs: ""
  };
  
  componentDidMount() {
		fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
			.then(res => res.json())
			.then(bots => {
				this.setState({
					bots: bots
				});
			});
	}

	collectBots = yourBot => {
		if (this.state.army.includes(yourBot)) {
	
			this.setState({
				army: this.state.army.filter(bot => bot !== yourBot)
			});
		} else {
			this.setState({
				army: [...this.state.army, yourBot]
			});
		}
	};

	isClicked = bot => {
		this.setState({
			cardCliked: !this.state.cardCliked,
			botSpecs: bot
		});
	};

	
	render() {
		return (
			<div>
				<YourBotArmy yourBots={this.state.army} army={this.collectBots} />
				{!this.state.cardCliked ? (
					<BotCollection allBots={this.state.bots} clicked={this.isClicked} />
				) : (
					<BotSpecs
				
						clicked={this.isClicked}
            army={this.collectBots}
            bot={this.state.botSpecs}
					/>
				)}
			</div>
		);
	}
}

export default BotsPage;