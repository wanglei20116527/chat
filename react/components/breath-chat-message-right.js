var React = require("react");

var BreathChatArrowRight = require("./breath-chat-arrow-right");

module.exports = React.createClass({
	propTypes: {
		content: React.PropTypes.string.isRequired
	},

	render: function(){
		return (
			<li  className = "breath-chat-message breath-chat-message-right" >
				<div className = "arrow-container">
					<BreathChatArrowRight className = "arrow" />
				</div>
				<p className = "content">{this.props.content}</p>
			</li>
		);
	}
});