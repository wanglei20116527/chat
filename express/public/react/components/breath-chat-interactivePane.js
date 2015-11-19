let React = require("react");

let Textarea = require("./breath-chat-textarea");

module.exports = React.createClass({
	render: function(){
		return (
			<div className = "breath-chat-interactivePane">
				<Textarea />
			</div>
		);
	}	
});