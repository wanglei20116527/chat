"use strict";

var React = require("react");

var MessageContainer = require("./breath-chat-message-container");
var InteractivePane = require("./breath-chat-interactivePane");

module.exports = React.createClass({
	displayName: "exports",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "breath-chat-communicatePane" },
			React.createElement(
				"div",
				{ className: "breath-chat-communicatePane-inner-wrapper" },
				React.createElement(MessageContainer, null),
				React.createElement(InteractivePane, null)
			)
		);
	}
});