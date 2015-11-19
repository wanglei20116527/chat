let React = require("react");

let MessageContainer = require("./breath-chat-message-container");
let InteractivePane = require("./breath-chat-interactivePane");

module.exports = React.createClass({
	render: function(){
		return (
			<div className = "breath-chat-communicatePane">
				<div className = "breath-chat-communicatePane-inner-wrapper">
					<MessageContainer />
					<InteractivePane />
				</div>
			</div>
		);
	}
});