var React = require("react");

var BreathChatArrowLeft = require("./breath-chat-arrow-left");

module.exports = React.createClass({
	propTypes: {
		content: React.PropTypes.string.isRequired
	},

	render: function(){
		return (
			<li  className = "breath-chat-message breath-chat-message-left" >
				<div className = "arrow-container">
					<BreathChatArrowLeft className = "arrow" />
				</div>
				<p className = "content">{this.props.content}</p>
			</li>
		);
	}
});