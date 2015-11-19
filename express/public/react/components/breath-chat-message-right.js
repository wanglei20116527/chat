let React = require("react");

let BreathChatArrowRight = require("./breath-chat-arrow-right");

module.exports = React.createClass({
	propTypes: {
		content: React.PropTypes.string.isRequired
	},

	render: function(){
		return (
			<div  className = "breath-chat-message right" >
				<div className = "arrow-container">
					<BreathChatArrowRight className = "arrow" />
				</div>
				<p className = "content">{this.props.content}</p>
			</div>
		);
	}
});