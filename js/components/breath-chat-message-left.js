"use strict";

var React = require("react");

var BreathChatArrowLeft = require("./breath-chat-arrow-left");

module.exports = React.createClass({
	displayName: "exports",

	propTypes: {
		content: React.PropTypes.string.isRequired
	},

	render: function render() {
		return React.createElement(
			"li",
			{ className: "breath-chat-message breath-chat-message-left" },
			React.createElement(
				"div",
				{ className: "arrow-container" },
				React.createElement(BreathChatArrowLeft, { className: "arrow" })
			),
			React.createElement(
				"p",
				{ className: "content" },
				this.props.content
			)
		);
	}
});