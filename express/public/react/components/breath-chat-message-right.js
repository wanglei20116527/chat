let React = require("react");

import BreathChatArrowRight from "./breath-chat-arrow-right";

class BreathChatMessageRight extends React.Component{
	render(){
		return (
			<div  className = "breath-chat-message right" >
				<div className = "arrow-container">
					<BreathChatArrowRight className = "arrow" />
				</div>
				<p className = "content">{this.props.content}</p>
			</div>
		);
	}
}

BreathChatMessageRight.propTypes = {
	content: React.PropTypes.string.isRequired	
};

export default BreathChatMessageRight;