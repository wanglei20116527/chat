let React = require("react");

import BreathChatArrowLeft from "./breath-chat-arrow-left";

class BreathChatMessageLeft extends React.Component{
	render(){
		return (
			<div  className = "breath-chat-message left" >
				<div className = "arrow-container">
					<BreathChatArrowLeft className = "arrow" />
				</div>
				<p className = "content">{this.props.content}</p>
			</div>
		);
	}
}

BreathChatMessageLeft.propTypes = {
	content: React.PropTypes.string.isRequired
};

export default BreathChatMessageLeft;