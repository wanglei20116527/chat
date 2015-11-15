"use strict";

var React = require("react");

var BreathChatArrowRight = require("./breath-chat-arrow-right");

module.exports = React.createClass({
	displayName: "exports",

	propTypes: {
		content: React.PropTypes.string.isRequired
	},

	render: function render() {
		return React.createElement(
			"div",
			{ className: "breath-chat-message right" },
			React.createElement(
				"div",
				{ className: "arrow-container" },
				React.createElement(BreathChatArrowRight, { className: "arrow" })
			),
			React.createElement(
				"p",
				{ className: "content" },
				this.props.content
			)
		);
	}
});